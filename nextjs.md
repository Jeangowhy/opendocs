
# ⚑ SSR with Next.js!
- https://github.com/vercel/next.js
- https://nextjs.org/learn/basics/create-nextjs-app
- https://www.npmjs.com/package/sharp
- https://www.npmjs.com/package/styled-jsx
- https://nextjs.org/learn/excel/typescript
- https://nextjs.org/learn/basics/deploying-nextjs-app
- https://nextjs.org/docs/deployment
- https://nextjs.org/docs/api-reference/cli
- Next.js 10 新特性 https://nextjs.org/blog/next-10

特色功能：

- 简化的部署流程，直接使用 Vercel 服务自动部署代码仓库。
- 混合 SSG 和 SSR 模式，在一个项目中同时支持构建时预渲染页面（SSG）和请求时渲染页面（SSR）。
- 增量静态生成，在构建之后以增量的方式添加并更新静态预渲染的页面。
- 支持 TypeScript，自动配置并编译 TypeScript。
- 快速刷新，快速、可靠的实时编辑体验，已在 Facebook 级别的应用上规模上得到验证。
- 基于文件系统的路由，每个 pages 目录下的组件都是一条路由。
- API 路由，创建 API 端点（可选）以提供后端功能。
- 内置支持 CSS，使用 CSS 模块创建组件级的样式。内置对 Sass 的支持。
- 采用由 Google Chrome 小组创建的、并经过优化的打包和 Code Splitting 拆分算法。

开发环境下执行以下命令就是最简单的部署，构建执行后就会在 `.next` 目录下生成那些可以预渲染组件以节省算力，避免每次请求都像传统服务端渲染那样重复做同样的事：

    yarn build
    yarn start -p 80

用官方文档的说法就是三步走 DPS - Develop, Preview, Ship：

- Develop: 开发 Next.js 应用，并因为采用 React Fast Refresh 技术，可以保持开发服务器处于运行状态。
- Preview: 预览，每次提交代码到 GitHub / GitLab / BitBucket 等，Vercel 自动创建新的部署和新的 URL。
- Ship: 发行，准备到这一步，可以合并代码分支到默认分支，如 main 由 Vercel 自动创建产品部署；

在 DPS 工作流程下，可以预览部署，每次创建的部署都有唯一的 URL 可以进行访问。

直接使用 next.js 提供的 create-next-app 初始化一个 SSR 项目。

     npm install -g -f create-next-app
     npx create-next-app react-nextjs-blog --use-npm --example "https://github.com/vercel/next-learn-starter/tree/master/learn-starter"
     cd react-nextjs-blog
     npm install
     npm run dev

安装成功后就可以运行开发服务器，默认监听本地 3000 端口，可以使用 -p 参数指定端口，另外建议使用 Windows Terminal 控制台工具。

    >npx next dev -h

      Description
        Starts the application in development mode (hot-code reloading, error
        reporting, etc)

      Usage
        $ next dev <dir> -p <port number>

      <dir> represents the directory of the Next.js application.
      If no directory is provided, the current directory will be used.

      Options
        --port, -p      A port number on which to start the application
        --hostname, -H  Hostname on which to start the application (default: 0.0.0.0)
        --help, -h      Displays this message

示范项目配置文件 package.json 如下，主要依赖有 next, react 和 react-dom 三个：

```json
{
  "name": "learn-starter",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "^10.0.0",
    "react": "17.0.1",
    "react-dom": "17.0.1"
  }
}
```

但背后依赖的模块非常多，其中 Sharp 模块作为图形处理加速模块，支持各种 Web 图形文件处理，如 JPEG, PNG, WebP 或 AVIF，使用到 C# 和 C++，需要相应的编译工具。它依赖了 libvips 和其它众多基础的 C++ 类库，对调整大图像文件的大小通常比使用 ImageMagick 或 GraphicsMagick 快 4-5 倍。颜色空间、嵌入的 ICC 配置文件和 alpha 透明通道都得到了正确的处理，Lanczos 重采样确保了质量不会因速度而牺牲。除了调整图像大小外，还可以进行旋转、提取、合成和 gamma 校正等操作。

大多数现代 macOS、Windows 和 Linux 系统 Node.js v10+ 不需要任何额外的安装或运行时依赖项，依赖此库的应用非常多，周下载量百万级别。

新建立的示范工程结构极简单，只有 page/index.js 一个默认页面脚本，和 public 目录两个静态资源文件，服务器程序什么配置好直接使用。

另外，Next.js 提供的 Vercel 平台可以很方便地布署项目，除了支持自家的框架，还支持其它多种流行的框架。只需将代码仓库导入，即可以完成编译和部署。默认使用 main 或者 master 分支，可以在托管项目中 Production Branch 进行设置。

只是作为免费服务，就别希望性能太高了，而且还不像 github.io 限制一个仓库，还绑定用户名。更重要的是自动部署，只要 push 提交更新代码仓库，就自动构建发布，简直不要太爽。

例如之前的 github.io 静态站点，重新布署在 Vercel，还有本教程相关的示例：

- https://jimboyeah-github-io.vercel.app/ 
- https://next-js-tutorials.vercel.app/



## 👉 项目基本结构

页面结构如下，只是展示了一个静态页面，就是一个导出的渲染函数，另外还使用了 `Head` 组件来生成 HTML 的 head 节点下的元信息标签：

    export default function Home() {
      return ( JSX... )
    }


```ts
import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main> ... </main>

      <footer> ...  /footer>

      <style jsx>{`
        @media (max-width: 600px) {
          .grid { width: 100%; flex-direction: column; }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
```


生成的配置 .next\server\pages-manifest.json 自动包含了路由和页面的映射关系：

```json
{
    "/_app": "pages/_app.js",
    "/_error": "pages/_error.js",
    "/_document": "pages/_document.js",
    "/": "pages/index.js"
}
```

所以，将 pages 作为页面组件的根目录，Next.js 自动处理路由映射，需要什么页面就添加什么脚本文件，这就很像在其它语言开发 Web 应用，只不过这是使用的是 JSX 和 React Components。

尝试创建一个 /posts/first-post.js 作为 post 页面，导出一个默认函数作为模块的渲染函数，然后通过 /posts/first-post 地址查看。当然，也可以创建其它名字的页面脚本，只要导出渲染函数即可以，以下这个示范如何使用反引号来避免 pre 标签显示的代码被处理：

```ts
export default function FirstPost(){
    return (
    <>
    <pre className="card">
{`
PS > npm run build

> learn-starter@0.1.0 build C:\coding\md-code\react-nextjs-blog
> next build

info  - Creating an optimized production build
info  - Compiled successfully
info  - Collecting page data
info  - Generating static pages (3/3)
info  - Finalizing page optimization

Page                                                           Size     First Load JS
┌ ○ /                                                          7.34 kB        70.5 kB
├ ○ /404                                                       3.46 kB        66.6 kB
└ ○ /posts/first-post                                          310 B          63.5 kB
+ First Load JS shared by all                                  63.2 kB
  ├ chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.783b05.js  13.3 kB
  ├ chunks/framework.e2fe4a.js                                 41.8 kB
  ├ chunks/main.f685e0.js                                      6.37 kB
  ├ chunks/pages/_app.7d2df5.js                                1.01 kB
  └ chunks/webpack.50bee0.js                                   751 B

λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)
●  (SSG)     automatically generated as static HTML + JSON (uses getStaticProps)
   (ISR)     incremental static regeneration (uses revalidate in getStaticProps)

PS >`}
    </pre>
    <style>{`
        body {background: darkblue; }
        pre {color: cornsilk; white-space: break-spaces;}
    `}</style>
    </>
    )
}
```

或者使用 React 的 `dangerouslySetInnerHTML` 属性来设置 innerHTML：

    <div dangerouslySetInnerHTML={{__html:`${md}`}}></div>

在以上的构建报告中，看到最后几行，不同的前缀符号表示 Next.js 对工程的文件进行了四种处理：

- λ  (Server)  运行时代表服务端渲染，即页面中实现了 `getInitialProps()` 或 `getServerSideProps())` 方法。
- ○  (Static)  自动静态化 HTML 渲染，由于页面没有使用初始参数数据，；
- ●  (SSG)     自动静态化生成，静态 HTML + JSON 数据组合成页面，页面实现了 `getServerSideProps())` 方法。
-    (ISR)     增量静态化重新生成 Incremental Static Regeneration，在页面实现的 `getServerSideProps())` 方法中返回了 `revalidate` 参数；

`getInitialProps()` with `getStaticProps()` 不能并用，使用 SSG 就要称为前者。

后面再深入解析这些方法，和页面的渲染。


## 👉 Assets & Metadata & CSS
- https://nextjs.org/docs/basic-features/built-in-css-support
- https://nextjs.org/learn/basics/assets-metadata-css
- https://nextjs.org/docs/basic-features/static-file-serving
- https://nextjs.org/docs/api-reference/next/head
- https://github.com/vercel/next.js/tree/canary/examples/with-styled-components
- https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss
- https://github.com/vercel/next.js/tree/canary/examples/with-emotion

这节学习如何管理静态资源：

- How to add static files (images, etc) to Next.js.
- How to customize what goes inside the <head> for each page.
- How to create a reusable React component which is styled using CSS Modules.
- How to add global CSS in pages/_app.js.
- Some useful tips for styling in Next.js.

如果，没有完成前面的工作，可以直接复制现有的示范工程继续。

    npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn-starter/tree/master/assets-metadata-css-starter"

Next.js 提供静态文件服务，如图像文件等，存放于根目录下的 public 顶级目录中，这里的文件可以像 pages 目录中的文件一样使用应用的 root 来引用。 

比如 `pages/index.js` 页面的 footer 需要使用一张静态图片就可以这样引用：

    <img src="/vercel.svg" alt="Vercel Logo" className="logo" />

这个 logo 图像在 public 目录中，通过 root 根目录引用它。

同时 public 目录也可以用来存放用于搜索引擎的指引文件 robots.txt，或 Google Site Verification，或者任意的静态资源。


Metadata 就是在 HTML 页面 head 区域的内容，如页面标题 title 等，可以使用 `Head` 组件渲染。

```jsx
import Head from 'next/head'
/*...*/

<>
  <Head>
    <title>First Post</title>
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Head>
  <h1>First Post</h1>
</>
```

注意前面的示范代码中，已经在 DOM 嵌入了样式，使用 styled-jsx 模块提供的写法：

    <style scoped>{` styles... `}</style>
    <style scoped global>{` styles... `}</style>

添加作用域 scroped 后，当前模块中的元素应用样式时会添加后续来避免全局污染，使用 global 和不使用作用域同样效果。

Next.js 内建了 CSS 和 Sass 支持，可以导入 .css 和 .scss 样式文件，还有 styled-jsx 用来编写 CSS-in-JS 样式脚本，当然可以使用其它的样式模块，如 styled-components 或 emotion 这些库，还可以使用像 Tailwind CSS 这样一些流行的样式库。

```ts
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return <Title>My page</Title>
}
```

样式处理的主要工作之一就是页面布局处理，可以缩写一些专用于此目的的组件 Layout Component，并存放于顶层的 components 目录下。

然后在页面脚本模块中引入使用：

```ts
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}
```

通过 CSS Modules 可以将样式仅用于当前组件，而不会污染其它不相关的组件结构。

创建一个样式模块文件 `components/layout.module.css`，注意这种固定格式的后缀名是样式模块的规则要求：

```css
.container {
  max-width: 36rem;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
}
```



将样式应用于组件 `components/layout.js`，直接将样式对象导出的类名赋给组件的 className 属性即可:

```ts
import styles from './layout.module.css'

export default function Layout({ children }) {
  return <div className={styles.container}>{children}</div>
}
```

样式模块 CSS Modules 所做的事件就是自动生成唯一的样式选择器，以避免与其它模块的样式有冲突。并且，Next.js 提供的代码分割功能也一样工作于 CSS Modules。这保证了页面总是持有最少的样式，页面模块的打包也更小。CSS Modules 从 JavaScript 代码打包过程中提取出样式定义，并在构造过程中生成 .css 文件以供 Next.js 动态加载。


前面已经提到过 global 用于定义样式，但是它也仅在组件加载时生效，要定义全站通用的样式，就需要对总入口组件，即 `pages/_app.js` 进行修改。

可以选择将全局样式表存放于任意目录，但是在顶层 styles 目录是个不错的主意，编写 `styles/global.css`：

```css
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  line-height: 1.6;
  font-size: 18px;
}

* {
  box-sizing: border-box;
}

a {
  color: #0070f3;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

img {
  max-width: 100%;
  display: block;
}
```

然后将其导入 `pages/_app.js` 即可，如果是首次添加这个文件，请重启开发服务器以生效：


```ts
import '../styles/global.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
```



## 👉 Polishing Layout 布局打磨


现在有了基本的站点结构，样式布局还需要打磨 Polishing Layout。

主要工作：

- 添加样式模块 `styles/layout.module.css`
- 添加样式模块 `styles/utils.module.css`
- 更新布局 `components/layout.js`
- 在主页上应用布局 `pages/index.js`

模块样式的组织方式供参考，可以按喜欢的方式组织或编写样式具体风格：

添加样式模块 `styles/layout.module.css`

```css
.container {
    max-width: 64rem;
    padding: 0 1rem;
    margin: 3rem auto 6rem;
}

.header {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.headerImage {
    width: 6rem;
    height: 6rem;
}

.headerHomeImage {
    width: 8rem;
    height: 8rem;
}

.backToHome {
    margin: 3rem 0 0;
}
```



添加样式模块 `styles/utils.module.css`

```css
.heading2Xl {
    font-size: 2.5rem;
    line-height: 1.2;
    font-weight: 800;
    letter-spacing: -0.05rem;
    margin: 1rem 0;
}

.headingXl {
    font-size: 2rem;
    line-height: 1.3;
    font-weight: 800;
    letter-spacing: -0.05rem;
    margin: 1rem 0;
}

.headingLg {
    font-size: 1.5rem;
    line-height: 1.4;
    margin: 1rem 0;
}

.headingMd {
    font-size: 1.2rem;
    line-height: 1.5;
}

.borderCircle {
    border-radius: 9999px;
}

.colorInherit {
    color: inherit;
}

.padding1px {
    padding-top: 1px;
}

.list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.listItem {
    margin: 0 0 1.25rem;
}

.lightText {
    color: #999;
}
```

在布局模块上应用以上样式，注意导入时指定完整样式文件名。

布局在页面头部使用的 og 元标签式是 Facebook 的 Open Graph 即开放图谱协议，一般是用于方便分享到 facebook 用的，同时使用了 og-image.now.sh 图片生成工具。

布局模块导出站点标题 siteTitle 供其它页面使用，还设置了 home 属性来指示是否作为主页显示相应的布局元素，使用了 {home ? (...) : (...)} 这种三元运算的用法，做条件选择渲染。

```jsx
import Head from 'next/head'
import Link from 'next/link'
import CardLink from './CardLink'
import styles from '/styles/layout.module.css'
import utilStyles from '/styles/utils.module.css'

const name ="Jeango"
export const siteTitle = "Next.js Lectures"

export default function Layout({children, home}) {
  let basicImage = 'https://assets.vercel.com/image/upload/front/assets/design/nextjs-black-logo.svg';
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Learn how to use Next.js" />
        <meta property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=${encodeURIComponent(basicImage)}`}
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <div className={styles.container}>
      <header className={styles.header}>
      {home ? (
        <>
          <img
            src="/profile.jpg"
            className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
            alt={name}
          />
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
        </>
      ):(
        <>
        <Link href="/">
          <a href="/">
          <img src="/profile.jpg" alt={name} 
          className={[styles.headerImage, utilStyles.borderCircle].join(' ')}
          srcset=""/>
          </a>
        </Link>
        <h2 className={utilStyles.headingLg}>
          <Link href="/"><a className={utilStyles.colorInherit}>{name}</a></Link>
        </h2>
        </>
      )}
      </header>
      <main className={styles.main}>{children}</main>
      {!home && (<div className="grid">
        <CardLink href="/" caption="Back Home">Go...</CardLink>
      </div>
      )}
      </div>
    </>
  )
}
```

```jsx
pages/index.js and replace its content with:

import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}
```


有时候需要给组件指定不止一个的样式类名，上面的列子中使用了两种方法，一是使用模板字符串将多个样式类名插入，另一个方法是使用数组的 join 方法以空格联接。

官方文档提供的是使用 classnames 模块，它可以根据条件是否成立来决定样式类是否设置，参考用法：

```jsx
import styles from './alert.module.css'
import cn from 'classnames'

export default function Alert({ children, type }) {
  return (
    <div
      className={cn({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error'
      })}
    >
      {children}
    </div>
  )
}
```





## 👉 Styling Tips 样式配置建议
- https://nextjs.org/docs/advanced-features/customizing-postcss-config

作为开箱即用的 Next.js 默认使用 PostCSS 来处理 CSS 文件。

要配置 PostCSS 可以在顶层目录中创建 postcss.config.js 配置文件，它在你使用 Tailwind CSS 这些样式库时很有用。推荐使用 postcss-preset-env 和 postcss-flexbugs-fixes 以匹配 Next.js 的默认行为，首先安装依赖：

    npm install tailwindcss postcss-preset-env postcss-flexbugs-fixes

然后编辑 `postcss.config.js`：

```js
module.exports = {
  plugins: [
    'tailwindcss',
    'postcss-flexbugs-fixes',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009'
        },
        stage: 3,
        features: {
          'custom-properties': false
        }
      }
    ]
  ]
}
```

建议清理未使用的 CSS，通过 `tailwind.config.js` 配置 purge 选项:

```js
// tailwind.config.js
module.exports = {
  purge: [
    // Use *.tsx if using TypeScript
    './pages/**/*.js',
    './components/**/*.js'
  ]
  // ...
}
```

Next.js 可以导入 SASS，两种 .scss .sass 扩展名都可以，通过样式模块支持组件级别的样式，`.module.scss` or `.module.sass`。

当然要为 Next.js 安装 Sass 依赖：

    npm install sass





## 👉 Next.js with TypeScript
- https://nextjs.org/learn/excel/typescript
- https://nextjs.org/docs/basic-features/typescript
- https://github.com/vercel/next.js/tree/canary/examples/with-typescript
- https://github.com/vercel/next-learn-starter/tree/master/typescript-final

Next.js 提供了 TypeScript 集成体验，通过配置 TypeScript，即可以转换 JavaScript 开发环境，以使用 Next.js 的类型规范。

首先安装 TypeScript 编译器和相关的类型声明模块，Node.js 模块本身已经含有类型声明文件，不用另外安装。

然后一并在工程目录中初始化默认配置文件 `tsconfig.json`，TypeScript strict 模式默认是没有开启的，建议打开。ts-node 模块可以用来直接运行 ts 脚本：

    npm install -g typescript
    npm install -g ts-node
    tsc --init

    # If you’re using npm
    npm install --save-dev typescript @types/react @types/node

    # If you’re using Yarn
    yarn add --dev typescript @types/react @types/node


编译器会生成 `next-env.d.ts` 这个类型声明模块文件，检查它可以确定 Next.js 类型已经在 TypeScript 编译器中起作用，通常内容是使用三斜杠指令引用其它的类型声明模块：

    /// <reference types="next" />
    /// <reference types="next/types/global" />


然后重启开发服务器，以使用 TypeScript 功能生效。


Next.js Specific Types 提供的类型如下。

Static Generation and Server-side Rendering


```ts
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'

export const getStaticProps: GetStaticProps = async context => {
  // ...
}

export const getStaticPaths: GetStaticPaths = async () => {
  // ...
}

export const getServerSideProps: GetServerSideProps = async context => {
  // ...
}
```


API Routes

```ts
import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  // ...
}
```


接下来需要将 JavaScript 工程的脚本文件改成 TypeScript，例如可以将 `pages/_app.js` 转换为 .tsx 扩展名以使用 AppProps 类型：

```ts
import { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App
```


列如，布局模块可以更新为带 TypeScript 类型语法结构：

```ts
export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
    return (<>...<>) 
}
```

转换后的文件可以参考 next-learn-starter 的 typescript-final



使用静态类型语法后，在 VSCode 中会有更多的提示信息，需要认真理解提示的意义。

例如，以下代码中的返回值会给出错误信息：

```ts
export default function App({ Component, pageProps }):AppProps {
  return (
    <><Component {...pageProps} /></>
  )
}
```

乍一看，是正确 tsx 语法，但是，仔细分析一下函数 AppProps 变成了函数的返回值，导致改变了函数签名而引发错误：

    Type 'Element' is not assignable to type 'AppPropsType<Router, {}>'.
      Property 'pageProps' is missing in type 'Element' but required in type 'AppInitialProps'.ts(2322)





## 👉 Custom Pages 自定义页面
- https://nextjs.org/docs/advanced-features/custom-app
- https://nextjs.org/docs/advanced-features/custom-document
- https://nextjs.org/docs/advanced-features/custom-error-page
- https://www.nextjs.cn/docs/advanced-features/custom-server
- https://nextjs.org/docs/api-reference/data-fetching/getInitialProps

页面也可以添加到 src/pages 目录下，作为根目录下的 pages 目录的替代品。在许多应用程序中，src 目录很常见，并且 Next.js 默认支持该目录。如果根目录下的 pages 目录存在的话，src/pages 目录将被忽略。

配置文件 next.config.js 和 tsconfig.json 等应放在根目录中，将他们移至 src 木下的话将无法使用，同样放在 public 目录也不行。

有几个特殊的页面，使用 TypeScript 时对应 ts 或 tsx 扩展名：

- `pages/_app.js` 应用入口页面。
- `pages/_document.js` 文档结构定义组件。
- `pages/_404.js` 404 错误页面。
- `pages/_error.js` 其它错误页面。

应用的基本执行过程：

         _app getInitialProps()  --> 2021-02-05T19:53:56.488Z
         _app constructor()      --> 2021-02-05T19:53:56.491Z
         _app render()           --> 2021-02-05T19:53:56.492Z
         page constructor()      --> 2021-02-05T19:53:56.493Z
         page render()           --> 2021-02-05T19:53:56.493Z
    _document getInitialProps()  --> 2021-02-05T19:53:56.494Z
    _document constructor()      --> 2021-02-05T19:53:56.496Z
    _document render()           --> 2021-02-05T19:53:56.496Z

以上是按类组件实现的逻辑过程，对于函数组件实现的页面只是一个渲染函数，注意静态成员函数 `getInitialProps()` 并不会在客户端执行，它用于页面的服务端渲染 Server-side Rendering 中生成初始化参数，常用于 SEO。但是它与自动静态优化 Automatic Static Optimization 不能同时使用，在 Next.js 9.3 或者更新的版本中，推荐使用 `getStaticProps()` 和 `getServerSideProps()` 来替代它。

可以定制这些特殊页面，如错误页面：

```jsx
// pages/_404.js
function Error({ statusCode }) {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
```

```jsx
// pages/_error.js
import Error from 'next/error'

export async function getServerSideProps() {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const errorCode = res.ok ? false : res.statusCode
  const json = await res.json()

  return {
    props: { errorCode, stars: json.stargazers_count },
  }
}

export default function Page({ errorCode, stars }) {
  if (errorCode) {
    return <Error statusCode={errorCode} />
  }

  return <div>Next stars: {stars}</div>
}
```


定制 document 页面可以按自己需要定制 HTML 页面中的基本结构，以下是 Next.js 默认的 Document，可以移除 `getInitialProps()` 或 `render()` 函数，如果不需要改变原有结构。但是，`<Html>`, `<Head `/>, `<Main />` 和 `<NextScript />` 是基本要求的节点结构，正常的页面渲染都需要。

```jsx
// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
```

自定义 Document 对象的 `renderPage()` 方法的理由有一个，为了使用封装那些 CSS-in-JS 样式库以在服务端渲染方式下正确工作。

```jsx
import Document, {DocumentContext} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx:DocumentContext) {
    const renderPageOri = ctx.renderPage
    
    ctx.renderPage = () => renderPageOri({
        // useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      })

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }
}

export default MyDocument
```

执行到 `_app::getInitialProps()`，接收到的参数并没有定义 TypeScript 类型，是直接构造出来的对象，可以在源代码中找到通过内部的 `loadGetInitialProps()` 方法传入的属性：

```tsx
/* renderToHTML()  next\next-server\server\render.tsx */
const ctx = {
  err,
  req: isAutoExport ? undefined : req,
  res: isAutoExport ? undefined : res,
  pathname,
  query,
  asPath,
  AppTree: (props: any) => {
    return (
      <AppContainer>
        <App {...props} Component={Component} router={router} />
      </AppContainer>
    )
  },
}
/* ... */
props = await loadGetInitialProps(App, {
  AppTree: ctx.AppTree,
  Component,
  router,
  ctx,
})
```

Next.js 这个项目还没有完全 TypeScript 化，像实例化 Document 对象时传入的参数，也是像这样直接构造的，具体可以参照 `renderDocument()` 方法的原型：

```tsx
  let html = renderDocument(Document, {
    ...renderOpts,
    canonicalBase:
      !renderOpts.ampPath && (req as any).__nextStrippedLocale

    docComponentsRendered,
    buildManifest: filteredBuildManifest,
    ...

export type RenderOpts = LoadComponentsReturnType & RenderOptsPartial

function renderDocument(
  Document: DocumentType, { ... }: RenderOpts & {
    props: any
    docComponentsRendered: DocumentProps['docComponentsRendered']
    docProps: DocumentInitialProps
    pathname: string
    query: ParsedUrlQuery
    dangerousAsPath: string
    ampState: any
    ampPath: string
    inAmpMode: boolean
    hybridAmp: boolean
    dynamicImportsIds: string[]
    dynamicImports: ManifestItem[]
    headTags: any
    isFallback?: boolean
    gsp?: boolean
    gssp?: boolean
    customServer?: boolean
    gip?: boolean
    appGip?: boolean
    devOnlyCacheBusterQueryString: string
    scriptLoader: any
  }
```


## 👉 Next Link as Route 
- https://nextjs.org/docs/api-reference/next/link
- https://nextjs.org/docs/api-reference/next/router
- https://nextjs.org/docs/routing/introduction
- https://nodejs.org/api/url.html#url_url_strings_and_url_objects


这样做法写的代码确实有点怪异：

```ts
import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}
```

对于平衡这种怪异的结构，Link 组件提供了客户端页面导航的功能，而且是不用刷新页面。

客户端导航 Client-side navigation 意味着页面转换是由 JavaScript 完成的，而 a 链接标签则是浏览器完成的，所以从时间效率上 Link 更表现更好。

可以用浏览器开发工具给页面 html 节点设置一个背景色来验证这过种，因为 body 节点会被脚本处理掉。如果发生浏览器发生页面切换，则背景色会重置，如果保留就说明客户端导航工作了。

所以 Link 就相当于路由组件在工作。

如果要链接到外部站点，使用 a 标签，另外 Link 组件不使用 className 属性。


在代码分割或暂存上的工作，Next.js 自动做好了，每个页面在请求时，只会加载需要的页面，这确保了首次加载的速度，即有好几百个页面要展示。

独立加载也表示页面模块是隔离的，如果一个页面异常，其它页面还可以正常展示。并且，在发布运行的版本中，Link 组件在呈现后，会自行在后台预加载页面，这是非常好的特性，页面可能在你还没有请求时就已经提前准备好了。

Link 组件原型定义参考：

```ts
/// <reference types="node" />
import React from 'react';
import { UrlObject } from 'url';
declare type Url = string | UrlObject;
export declare type LinkProps = {
    href: Url;
    as?: Url;
    replace?: boolean;
    scroll?: boolean;
    shallow?: boolean;
    passHref?: boolean;
    prefetch?: boolean;
    locale?: string | false;
};
declare function Link(props: React.PropsWithChildren<LinkProps>): React.DetailedReactHTMLElement<{
    onMouseEnter?: ((event: React.MouseEvent<Element, MouseEvent>) => void) | undefined;
    onClick: (event: React.MouseEvent<Element, MouseEvent>) => void;
    href?: string | undefined;
    ref?: any;
}, HTMLElement>;
export default Link;
```



Link 组件使用以下属性：

- `href` - 组件路径或 URL 地址，这是唯一必需属性；
- `as` - 装饰参数，显示在浏览器地址栏中路径，在 Next.js 9.5.3 之前用作动态路由；
- `passHref` - 如果需要使用组件封装 a 标签，请指定此属性，默认为 false；
- `prefetch` - 预存取页面默认 true 启用，任何 Link 都会后台加载在页面视图范围的目标页面。使用静态生成的页面将预加载带数据的 JSON 文件以加快页面切换。
- `replace` - 是否要替换浏览器的 history 记录，默认是 false 即增加一条历史记录；
- `scroll` - 指示在导航后是否滚动页面到顶端，默认 true；
- `shallow` - 是否在不运行 `getStaticProps`、`getServerSideProps` 或者 `getInitialProps` 的情况下更新当前页路径，默认为 false。
- `locale` - 本地化会自动处理好，仍然可以通过此属性提供另外的本地化信息，当 href 指向失败时，禁止默认包含本地化的行为。

参考 Next.js 国际化相关的配置、i18n 路由等内容。

对于使用动态片段的路由，除了捕捉所以路由没什么特别可以做的，自从 Next.js 9.5.3 以来，使用插件 interpolation 或 URL Object 来生成链接非常便利。

比如 `pages/blog/[slug].js` 这条动态路由会匹配以下链接：


```ts
import Link from 'next/link'

function Posts({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/blog/${encodeURIComponent(post.slug)}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Posts
```



示范使用类组件封装 a 标签：

```ts
import Link from 'next/link'
import styled from 'styled-components'

// This creates a custom component that wraps an <a> tag
const RedLink = styled.a`
  color: red;
`

function NavLink({ href, name }) {
  // Must add passHref to Link
  return (
    <Link href={href} passHref>
      <RedLink>{name}</RedLink>
    </Link>
  )
}

export default NavLink
```


函数组件封装 a 标签还需要加封 `forwardRef` 进行引用转发：

```js
import Link from 'next/link'

// `onClick`, `href`, and `ref` need to be passed to the DOM element
// for proper handling
const MyButton = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      Click Me
    </a>
  )
})

function Home() {
  return (
    <Link href="/about" passHref>
      <MyButton />
    </Link>
  )
}

export default Home
```

配合使用动态路由：


```ts
import Link from 'next/link'

function Home() {
  return (
    <ul>
      <li>
        <Link
          href={{
            pathname: '/about',
            query: { name: 'test' },
          }}
        >
          <a>About us</a>
        </Link>
      </li>
      <li>
        <Link
          href={{
            pathname: '/blog/[slug]',
            query: { slug: 'my-post' },
          }}
        >
          <a>Blog Post</a>
        </Link>
      </li>
    </ul>
  )
}

export default Home
```

上一例示范使用 Node URL 对象作为 href 参数：

- 一条对应常规路由: /about?name=test
- 另一条是动态路由: /blog/my-post


其它属性使用示范：

```html
<Link href="/about" replace>
  <a>About us</a>
</Link>

<Link href="/?counter=10" scroll={false}>
  <a>Disables scrolling to the top</a>
</Link>

```



## 👉 Route 路由配置
- https://nextjs.org/docs/routing/dynamic-routes
- https://nextjs.org/docs/api-routes/introduction
- https://github.com/vercel/next.js/tree/canary/examples/dynamic-routing
- https://www.nextjs.cn/learn/basics/dynamic-routes/implement-getstaticpaths
- https://www.nextjs.cn/learn/basics/dynamic-routes/implement-getstaticprops
- https://www.nextjs.cn/learn/basics/dynamic-routes/render-markdown
- https://nextjs.org/docs/advanced-features/automatic-static-optimization
- https://www.nextjs.cn/docs/advanced-features/i18n-routing

路由和页面生成，还有数据获取是整体，整体的学习目标：

- 了解路由的四种基本形式，常规路由，和三种动态路由形式 `[slug]` 和 `[...slug]` 还有 `[[...slug]]`。
- 通过使用 `getStaticPaths()`该当和动态路由进行静态生成。
- 实现 `getStaticProps()` 函数以获取数据生成页面时依赖的数据。
- 使用 `remark` 模块实现 markdown 文档解析。
- 链接到动态路由的页面。

前面解析过，Next.js 的路由是基于文件路径的生成的，一个普通的文件路径信息就是一条路由，即页面文件具有什么样的路径信息就生成什么样的路由。

Next.js 支持具有动态路由的页面，具有动态路由的页面路径中使用方括号。例如，如果你创建了一个命名为 `pages/posts/[id].js` 的页面文件，那么就可以通过 `posts/1`、`posts/2` 等类似的 URL 地址进行访问，访问时会将参数传入并且由 Router 对象解析出来。

动态路由 Dynamic Routes，当页面文件名或目录名中用方括号命名，就是动态路由，这表示给生成的路由设置了参数。

以下示范，如何在请求页面时使用 Router 对象获取 URL 传递的数据：

```tsx
import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return <p>Post: {id}</p>
}

export default Post
```

在设置 Link 组件属性时，href 属性一般也包含 [id] 这个符号，还要完整包含目录路径结构的其它部分。在 Next.js 10 新特性中，使用 as 属性是一个可选项，也可以用来覆盖 href 属性。注意，as 属性比 href 属性更优先，这个值也就是在客户端的状态，它会回传到服务器以匹配页面文件

参考 dynamic-routing 示范工程的 `\pages\post\[id]\index.js`：

```jsx
import { useRouter } from 'next/router'
import Link from 'next/link'
import Header from '../../../components/header'

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <Header />
      <h1>Post: {id}</h1>
      <ul>
        <li>
          <Link href="/post/[id]/[comment]" as={`/post/${id}/first-comment`}>
            <a>First comment</a>
          </Link>
        </li>
        <li>
          <Link href="/post/[id]/[comment]" as={`/post/${id}/second-comment`}>
            <a>Second comment</a>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default Post
```

Dynamic route segments，要使用页面文件路径匹配上动态路由片段，可以在目录、文件名字上使用方括号，参考以下文件名与生成的路由对应关系：

- pages/blog/[slug].js         ---> /blog/:slug          --> (/blog/hello-world)
- pages/[username]/settings.js ---> /:username/settings  --> (/foo/settings)
- pages/post/[...all].js       ---> /post/*              --> (/post/2020/id/title)

注意事项，当多个路由匹配时，预定义路由优先，即非动态路由比动态路由优先匹配执行，按以下优先顺序执行匹配：

- Predefined Routes 
- Dynamic Routes
- Catch-all Routes
- Optional Catch-all Routes

在同一级目录，Catch-all Routes 和 Optional Catch-all Routes 不能同时设置。

例如：

pages/post/create.js     --> 匹配 /post/create
pages/post/[pid].js      --> 匹配 /post/1, /post/ab, /post/cd ... 但是不能匹配 /post/create
pages/post/[...slug].js  --> 匹配 /post/1/2, /post/a/b/c ... 但不能匹配 /post/create, /post/abc
pages/post/[[...opt]].js --> 匹配前面几种情况之外的路由，还可以匹配 /post

那些由 Automatic Static Optimization 自动静态优化过的页面会在不依赖路由参数的情况下水合 Hydrated，即 query 是 {} 空对象，没有数据。然后服务端会触发一个更新，让应用提供 query 数据。

自动静态优化是通过检测页面是否有导出 `getServerSideProps()` 或 `getInitialProps()` 函数决定是否进行优化的。

使用动态路由就需要实现 `getStaticPaths()` 函数，以返回有效路由匹配列表。因为具体要实现什么路由路径的页面只有给出定义，Next.js 才知道哪么路径的页面是有效的。只有命中列表的才算是有效页面路径，Next.js 才会去执行页面生成。如果，想对没有命中的路由路径进行其它处理，那么就需要使用 `getStaticPaths()` 函数反的参数来设置，其中的 `fallback` 参数是设置如何处理未命中路由的，参考 `getStaticPaths()` 静态化路径生成函数。 

如果不为动态路由实现 `getServerSideProps()` 或 `getInitialProps()` 函数，则它们表现和一般的预定义路由没有什么不同。并且请求页面时，也收不到参数的，这是因为这种情况下 Next.js 使用的是静态构建模式。

作为测试，可以准备以下这组 Link 组件，分别用于不同路由规则的测试：

    🚩<Link href="/route/normal"><a>Normal Link</a></Link>
    🚩<Link href="/route/normal" as="/route/normal?more=yes"><a>Normal As</a></Link>

    🚩<Link href="/route/dynamic"><a>Dynamic Link</a></Link>
    🚩<Link href="/route/dynamic" as="/route/more?more=yes"><a>Dynamic More</a></Link>

    🚩<Link href="/route/catch/all"><a>Catch All</a></Link>
    🚩<Link href="/route/catch/GitHub?more=yes"><a>Catch GitHub</a></Link>


另外准备几个页面，命名以使用不同的路由规则，这里以 `/route/[[...catchopt]].tsx` 作为示范：

```ts
import Layout from '../../components/layout'
import {useRouter} from 'next/router'

export default function Catchopt(props:any){
    const Router = useRouter()
    let json = JSON.stringify(Router.query);
    let fallback = Router.isFallback && "FALLBACK";
    console.log(`------ [[...catchopt]].tsx`, fallback, props, Router);
    return (
    <Layout>
    <h3 className="card">Optional Catch-all Routes Test</h3>
    {Router.isFallback?(
        <h1 className="card">Router.isFallback</h1>
    ):(
        <pre className="card">{json}</pre>
    )}
    </Layout>
    )
}

export async function getStaticProps(context: any) {
    console.log("++++++ Optional Catch-all getStaticProps", context);
    return {
        props: {
            data: JSON.stringify(context)
        }
    }
}

export async function getStaticPaths(context:any) {
    console.log("++++++ Optional Catch-all getStaticPaths", context);
    const res = await fetch(`https://github.com/manifest.json`)
    const data = await res.json()
    let locale = context.locale ?? 'zh-CN';
    let paths = [
        {locale, params:{ catchopt: ['catch', 'all'] }},
        {locale, params:{ catchopt: ['catch', data.name] }},
        {locale, params:{ catchopt: false }}, 
    ]
    return { paths, fallback: false }
}
```

这种 Optional Catch-all 路由是可选形式的 Catch-all，可以在 `params` 设置 null, [], undefined 或者 false 都可以，表示匹配路由文件所在的一级目录，这就是可选的灵活性。就这里，`/route/[[...catchopt]].tsx` 页面而言，设置为 null 匹配的是 `/route` 这个路径的页面，对应生成的文件就是 `/route.html`。

从构建过程中输出的目录结构也可以看到，各个路由路径对应的输出：

    Page                                                           Size     First Load JS
    ┌ ● /                                                          2.29 kB        73.7 kB
    ├   /_app                                                      0 B            63.6 kB
    ├ ○ /404                                                       3.46 kB          67 kB
    ├ ○ /authors/me                                                2.86 kB        66.4 kB
    ├ ○ /posts/build                                               981 B          72.4 kB
    ├ ● /posts/posts                                               1.92 kB        65.5 kB
    ├ λ /posts/tutorial-assets                                     3.66 kB        82.9 kB
    ├ ● /route/[[...catchopt]]                                     458 B          68.4 kB
    ├   ├ /en/route/catch/all
    ├   ├ /en/route/catch/GitHub
    ├   └ /en/route
    ├ ● /route/[dynamic]                                           411 B          68.3 kB
    ├   ├ /en/route/dynamic
    ├   ├ /en/route/pass
    ├   ├ /en/route/sideway
    ├   └ /en/route/more
    ├ ○ /route/normal                                              404 B          68.3 kB
    └ ● /tutorial/[...slug]                                        685 B          79.9 kB
        ├ /zh-CN/tutorial/tutorial-typescript
        ├ /zh-CN/tutorial/tutorial-styling
        ├ /zh-CN/tutorial/tutorial-start
        └ [+5 more paths]


在导出 `getStaticProps()` 和 `getStaticPaths()` 函数时，就是在向 Next.js 表明，页面需要使用动态的数据，渲染生成时需要执行它们，参考输出信息：

    ++++++ Optional Catch-all getStaticPaths { locales: null, defaultLocale: null }
    ++++++ Optional Catch-all getStaticProps {
      params: { catchopt: [ 'catch', 'GitHub' ] },
      locales: undefined,
      locale: undefined,
      defaultLocale: undefined
    }
    ------ [[...catchopt]].tsx false { data: '{"params":{"catchopt":["catch","GitHub"]}}' } ServerRouter {
      route: '/route/[[...catchopt]]',
      pathname: '/route/[[...catchopt]]',
      query: { catchopt: [ 'catch', 'GitHub' ] },
      asPath: '/route/catch/GitHub',
      basePath: '',
      events: undefined,
      isFallback: false,
      locale: undefined,
      isReady: false,
      locales: undefined,
      defaultLocale: undefined,
      domainLocales: undefined
    }

不难发现，`getStaticProps()`  函数返回的 props 就是组件的输入参数。而它的输入的 context 中的 **params** 包含动态路由参数信息，比如页面 `[id].js` 会收到类似 `{ id: ... }` 这样的路由参数，应该结合 `getStaticPaths()` 考虑。

可以尝试注解掉 `getStaticProps()` 和 `getStaticPaths()`，比较一下组件在执行时获取到的参数，会发现原本来自客户端的查询字符串没有了。

如果要在项目中使用本地化信息，请在配置文件中设置：

```js
// 👉 /next.config.js 配置脚本
module.exports = {
  i18n: {
    locales: [ 'en', 'zh-CN' ],
    defaultLocale: 'en',
  },
}
```

这样，运行后可以从 `getStaticProps()` 和 `getStaticPaths()` 函数的传入参数中获取：

    { locales: [ 'en', 'zh-CN' ], locale: 'zh-CN', defaultLocale: 'en' }

其中 locale 是通过浏览器标头检查出来的，而且只在首页中执行检查，假设浏览发送了以下标头内容：

    Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,pt;q=0.7,zh-TW;q=0.6,ja;q=0.5


设置本地化信息后，路由路径会自动处理，添加区域前缀。但是对于动态路由，需要相应调整，否则匹配不正确。


Link 组件可以使用 Node URL 对象，所以它又可以按以下方式给 href 属性传入一个对象结构：

```jsx
import Link from 'next/link'

export default function BlogLink() {
  return (
    <Link
      href={{
        pathname: '/blog/[post]/[comment]',
        query: { post: 'post-1', comment: 'comment-1' },
      }}
    >
      <a>Valid link</a>
    </Link>
  )
}
```

动态路由的使用一般就是表示要使用动态数据，只要导出数据获取 API，就会在构建期的数据获取行为。除非使用浅路由，Shallow Routing 它可以导致不执行本应在构建期的执行的 `getServerSideProps`, `getStaticProps`, `getInitialProps` 等数据获取方法。


Dynamic Routes 还可以扩展捕获所有路径，在方括号中使用三个省略点就可以，如`pages/post/[...slug].js` 就可以匹配 `/post/a`, `/post/a/b`, `/post/a/b/c` 等等。

可选扩展方式使用双重方括号，匹配范围多一层，如 `pages/post/[[...slug]].js` 还可以多匹配 `/post` 这一情况。

而 Linkg 属性相应设置的 query 对象如下：

    { } // GET `/post` (empty object)
    { "slug": ["a"] } // `GET /post/a` (single-element array)
    { "slug": ["a", "b"] } // `GET /post/a/b` (multi-element array)


启用浅路由只需要设置路由选项的 shallow 为 true：

```ts
import { useEffect } from 'react'
import { useRouter } from 'next/router'

// Current URL is '/'
function Page() {
  const router = useRouter()

  useEffect(() => {
    // Always do navigations after the first render
    router.push('/?counter=10', undefined, { shallow: true })
  }, [])

  useEffect(() => {
    // The counter changed!
  }, [router.query.counter])
}

export default Page
```

当 URL 更新时，如 `/?counter=10` 页面并不会替代，只有路由状态改变才会，可以通过类组件的 `componentDidUpdate()` 生命周期函数来观察：

```js
componentDidUpdate(prevProps) {
  const { pathname, query } = this.props.router
  // verify props have changed to avoid an infinite loop
  if (query.counter !== prevProps.router.query.counter) {
    // fetch data based on the new query
  }
}
```

通常 `next/link` 已经满足大部分的路由需求，但还是有时候要在客户端进行导航，这时可以使用 Router 对象：

```ts
import { useRouter } from 'next/router'

function ReadMore() {
  const router = useRouter()

  return (
    <span onClick={() => router.push('/about')}>Click here to read more</span>
  )
}

export default ReadMore
```





## 👉 Pages 页面
- https://www.nextjs.cn/docs/basic-features/pages
- https://github.com/vercel/next.js/tree/canary/examples/
- https://www.nextjs.cn/learn/basics/dynamic-routes/implement-getstaticpaths
- https://www.nextjs.cn/learn/basics/dynamic-routes/implement-getstaticprops
- https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
- https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
- https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering

Next.js 应用中的页面就是一个从 .js、jsx、.ts、.tsx 文件导出的 React 组件，这些文件存放在顶层的 pages 目录下，每个页面都使用文件名作为路由 route，即路由是基于目录结构生成的。

Next.js 支持具有动态路由的页面，具有动态路由的页面。例如，如果你创建了一个命名为 pages/posts/[id].js 的文件，那么就可以通过 posts/1、posts/2 等类似的 URL 地址进行访问，访问时会将参数动态传入。

Next.js 默认预渲染每个页面，Pre-rendering，这意味着会预先为每个页面生成相应的 HTML 文件，而不是由客户端 JavaScript 来完成。预渲染可以带来更好的性能和 SEO 效果。

每个生成的 HTML 文件都与该页面所需的最少 JavaScript 代码相关联。当浏览器加载一个页面时，其代码将运行并使页面完全具有交互性，此过程称为水化 Hydration。

Next.js 具有两种形式的预渲染： 

- Static Generation，在构建时静态生成生成，并在每次页面请求时重用。
- Server-Side Rendering，在每次请求时进行服务器端渲染。

这两种方式的不同之处在于为页面生成 HTML 页面时机的选择上，重要的是 Next.js 允许你为每个页面选择预渲染的方式。可以创建一个混合渲染的 Next.js 应用程序，对大多数页面使用静态生成，同时对其它页面使用服务器端渲染。

页面需要获取外部数据的静态预渲染又分为以下两种情况：

- 页面依赖内容数据，使用 `getStaticProps`。
- 页面依赖路径数据，使用 `getStaticPaths`，通常还要同时使用 `getStaticProps`。

这里，需要区分一下页面这个概念，尽管，页面也是组件，但是这个组件作为页面来使用用。在请求时先加载是页面，然后再由页面加载其它组件，而对于其它组件来说，以上这些数据获取方法并不可用，即使将其文件放到 pages 目录下也一样。

以下是 Vercel next.js 示范项目中提供的涉及数据获取的静态生成例子：

- cms-wordpress   --> WordPress Example
- blog-starter    --> Blog Starter using markdown files
- cms-datocms     --> DatoCMS Example
- cms-takeshape   --> TakeShape Example
- cms-sanity      --> Sanity Example
- cms-prismic     --> Prismic Example
- cms-contentful  --> Contentful Example
- cms-strapi      --> Strapi Example
- cms-agilitycms  --> Agility CMS Example
- cms-cosmic      --> Cosmic Example
- cms-buttercms   --> ButterCMS Example
- cms-storyblok   --> Storyblok Example
- cms-graphcms    --> GraphCMS Example
- cms-kontent     --> Kontent Example


出于性能考虑，相对服务器端渲染，我们更推荐使用静态生成。 CDN 可以在没有额外配置的情况下缓存静态生成的页面以提高性能。但是，在某些情况下，服务器端渲染可能是唯一的选择。

你还可以将客户端渲染与静态生成或服务器端渲染一起使用。这意味着页面的某些部分可以完全由客户端 JavaScript 呈现。

使用静态生成，执行 next build 生成页面对应的 HTML 文件。这意味着在生产环境中，运行 next build 时将生成该页面对应的 HTML 文件。然后，此 HTML 文件将在每个页面请求时被重用，还可以被 CDN 缓存。

Next.js 可以静态生成带有或不带有数据的页面。

预渲染时不需要获取任何外部数据这种情况下，Next.js 只需在构建时为每个页面生成一个 HTML 文件即可。


场景一、页面内容依赖于数据的静态渲染

假定博客页面可能需要从 CMS 内容管理系统中获取文章列表，以下 `Blog` 组件在获取数据前不会进行渲染。

```jsx
// TODO: Need to fetch `posts` (by calling some API endpoint)
//       before this page can be pre-rendered.
function Blog({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li>{post.title}</li>
      ))}
    </ul>
  )
}

export default Blog
```

要在预渲染时获取此数据，Next.js 允许在 `Blog` 组件文件中导出异步的 `getStaticProps()` 函数。该函数在构建时被调用，允许你在预渲染时将获取的数据，返回的值将作为传递给页面的参数。


```jsx
// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://.../posts')
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}

export default Blog
```

场景二、页面路径依赖于数据。

如前面介绍，Next.js 允许你创建具有动态路由的页面。例如，一个名为 `pages/posts/[id].js` 的文件用以展示以 id 标识的单篇博客文章。当 URL 指向 posts/1 路径时将展示 id=1 的博客文章。这种情况就路径依赖于数据，在构建时 id 所对应的内容时需要从外部获取。

为了解决这个问题，Next.js 允许在动态页面文件里导出 `getStaticPaths()` 异步函数。该函数在构建时被调用，其返回值指定要预渲染的路径。

```jsx
// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://.../posts')
  const posts = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => `/posts/${post.id}`)

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}
```


同样在 `pages/posts/[id].js` 页面中还需要导出 `getStaticProps()` 以便可以获取 id 所对应的博客文章的数据并进行预渲染：

```jsx
// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`https://.../posts/${params.id}`)
  const post = await res.json()

  // Pass post data to the page via props
  return { props: { post } }
}
```

建议尽可能使用静态生成，不论带有或不带数据，因为所有页面都可以只构建一次并托管到 CDN 上，这比让服务器根据每个页面请求来渲染页面快得多。

还可以对多种类型的页面使用静态生成，包括：

- Marketing pages
- Blog posts
- E-commerce product listings
- Help and documentation



另一方面，如果你无法在用户请求之前预渲染页面，则静态生成不是一个好主意。这也许是因为页面需要显示频繁更新的数据，并且页面内容会随着每个请求而变化。

在这种情况下，您可以执行以下任一操作：

- 将静态生成与客户端渲染一起使用，跳过页面某些部分的预渲染，然后使用客户端 JavaScript 来填充它们。有关此方法的信息，请查看获取数据部分文档。
- 使用服务器端渲染，Next.js 针对每个页面的请求进行预渲染。由于 CDN 无法缓存该页面，因此速度会较慢，但是预渲染的页面将始终是最新的。

服务器端渲染也被称为 SSR 或动态渲染，如果页面使用的是服务器端渲染，则会在每次页面请求时重新生成页面的 HTML。需要在页面文件中导出 `getServerSideProps()` 异步函数，服务器将在每次页面请求时调用此函数。

例如，假设你的某个页面需要预渲染频繁更新的数据，比如从外部 API 获取。你就可以编写 getServerSideProps 获取该数据并将其传递给 Page。

示范如下：

```jsx
// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://github.com/manifest.json`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
```

如你所见，`getServerSideProps` 类似于 `getStaticProps`，但两者的区别在于前者在每次页面请求时都会运行，而在构建时不运行。

总结 Next.js 的两种预渲染形式：

- 静态生成 HTML 是在构建时生成的，并重用于每个页面请求。静态生成的页面只需导出页面组件或 `getStaticProps` 函数，如果需要还可以导出 `getStaticPaths` 函数。对于可以在用户请求之前预先渲染的页面来说，这非常有用，你也可以将其与客户端渲染一起使用以便引入其他数据。

- 服务器端渲染 HTML 是在每个页面请求时生成的。要使用服务器端渲染，请导出 `getServerSideProps` 函数。由于服务器端渲染会导致性能比静态生成慢，因此仅在绝对必要时才使用此功能。




## 👉 Pre-rendering and Data Fetching
- https://nextjs.org/learn/basics/data-fetching
- https://nextjs.org/docs/basic-features/data-fetching
- https://github.com/vercel/next.js/tree/canary/examples
- https://nextjs.org/docs/basic-features/pages
- https://www.nextjs.cn/learn/basics/dynamic-routes/implement-getstaticpaths
- https://www.nextjs.cn/learn/basics/dynamic-routes/implement-getstaticprops
- https://nextjs.org/docs/basic-features/data-fetching#fetching-data-on-the-client-side
- [File System](https://nodejs.org/docs/latest-v9.x/api/fs.html)
- Strapi - Open source Node.js Headless CMS 🚀 https://strapi.io


前面的内部中，只涉及了文件系统的数据，即所有呈现的内容都来自文件系统。实际应用中，很少见，除了纯静态站点 Static Page，或者像 HCMS - Headless Content Management System 这种将数据库存到其它位置的无头内容管理系统。

传统的 CMS 结合了内容和渲染部分，而 Headless CMS 内容优先，将渲染功能剥离，即称之无头。HCMS 的目的是将逻辑与内容分离，从而实现简单的变更管理，并在许多组件中分解复杂的应用程序，每个组件都有其单一的责任。朝着这个方向前进，HCMS 可以取代实际上你正在调用的后端，并节省了许多创建 CRUD 数据库操作的有用工作。剥离后端服务后，HCMS 也表现得比 Wordpress 更加安全。

HCMS 诞生于创建多组件应用程序，这可以快速更改表示逻辑和设计，这是一个很大的改进，当您在现代网站或应用程序上工作时，由于业务需求，可能需要每年更换一次 UI。

作为服务端渲染，数据获取和页面渲染是分不开的，页面获取数据的方式决定了该如何进行渲染。

这部分学习内容：

- Next.js 预渲染特性 pre-rendering；
- 两种预渲染方式 Static Generation & Server-side Rendering。
- Static Generation 即 SSG 又分数据依赖方式和无数据依赖方式。
- 如何使用导出 `getStaticProps()` 函数来获取外部数据。

以下是 Vercel next.js 示范项目中提供的涉及数据获取的静态生成例子：

- cms-wordpress   --> WordPress Example
- blog-starter    --> Blog Starter using markdown files
- cms-datocms     --> DatoCMS Example
- cms-takeshape   --> TakeShape Example
- cms-sanity      --> Sanity Example
- cms-prismic     --> Prismic Example
- cms-contentful  --> Contentful Example
- cms-strapi      --> Strapi Example
- cms-agilitycms  --> Agility CMS Example
- cms-cosmic      --> Cosmic Example
- cms-buttercms   --> ButterCMS Example
- cms-storyblok   --> Storyblok Example
- cms-graphcms    --> GraphCMS Example
- cms-kontent     --> Kontent Example

在页面部分的文档也讲到，除了 CSR - Client-side Rendering，Next.js 还具有两种形式的预渲染： 

- SSG - Static Site Generation，在构建时静态生成生成，并在每次页面请求时重用。
- SSR - Server-Side Rendering，在每次请求时进行服务器端渲染。

对于页面需要获取外部数据的静态预渲染又分为以下两种情况：

- 页面内容取决于外部数据，使用 `getStaticProps`。
- 页面路径取决于外部数据，使用 `getStaticPaths`，通常还要同时使用 `getStaticProps`。

有三个函数相关的：

- `getStaticProps` (Static Generation): Fetch data at build time.
- `getStaticPaths` (Static Generation): Specify dynamic routes to pre-render pages based on data.
- `getServerSideProps` (Server-side Rendering): Fetch data on each request.

使用 TypeScript 可以看到三个函数的原型定义：

```ts
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'

export const getStaticProps: GetStaticProps = async context => {
  // ...
}

export const getStaticPaths: GetStaticPaths = async () => {
  // ...
}

export const getServerSideProps: GetServerSideProps = async context => {
  // ...
}
```

不一定要在服务器端生成页面时使用数据，对于有频繁的数据交互的页面，可以将数据获取的行为放在客户端进行：

- 首先，直接呈现无数据的页面，但是页面的部分可以重新静态生成，只要显示数据加载中的提示状态。
- 然后，从客户端获取数据，得到数据后再显示，这在用户仪表盘页面 User Dashboard 是常见的做法，因为这是私有页面，也不需要 SEO。


Next.js 背后的团队创建了一个 React Hook 来做这个数据获取的功能，叫做 SWR，它处理了客户端数据获取的缓存、重新验证、焦点追踪、刷新等。

```ts
import useSWR from 'swr'

function Profile() {
  const { data, error } = useSWR('/api/user', fetch)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return <div>hello {data.name}!</div>
}
```


### getStaticPaths 静态化路径生成函数
- https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
- https://nextjs.org/docs/advanced-features/i18n-routing

示范实现导出 `getStaticPaths()` 函数：

```ts
export async function getStaticPaths() {
  return {
    paths: [
      { params: { ... } } // See the "paths" section below
    ],
    fallback: true or false // See the "fallback" section below
  };
}
```

为何将函数 `getStaticPaths()` 取名静态化路径生成函数？主要是因为它的返回值就是用来匹配页面路由路径的，只有命名返回值的路由才是有效的页面路径。

这个函数基本没有什么输入数据，除区域信息，在没有设置的情况下得到的输入就是 `{ locales: null, defaultLocale: null }`。 

期待返回的对象类型 { paths: [], fallback: boolean }，fallback 表示回退处理方式。

fallback 总结起来：

- `{ fallback: false }` 不降级，路由未命中时静态页面路径时，直接返回 404 路由；
- `{ fallback: true }` 降级，路由未命中静态页面路径时，先返回降级页面，此时页面 props 为空，生成 HTML 和一份 JSON 供 CSR 客户端渲染使用，完成之后浏览器拿到数据在客户端填上 props，渲染出完整页面。
- `{ fallback: 'blocking' }` 不降级，并且要求用户请求一直等到新页面静态生成结束，就是 SSR，渲染过程是阻塞的，只是完成之后会保留结果 HTML。当用户首次请求页面时，最好能够阻止预渲染。在初始渲染完成之后，再将该页面重复用于响应后续请求。

其中 `{ fallback: false }` 等告诉 Next.js 对所有 `getStaticPaths()` 未返回的 paths 即未匹配的页面返回 404 路由。如果有少量路径要预渲染，可以这样做，因为少量页面都可以在构建时静态生成。对于不经常添加新页面，它也很有用。但是，向数据源中添加了更多项并需要渲染新页面时，则需要再次运行构建。


这个 `getStaticPaths()` 函数返回的 paths 是非常重要的参数，它决定了哪些路径要进行静态渲染。

根据页面路由的配置四种不同形式，常规路由，和三种动态路由形式 `[slug]` 和 `[...slug]` 还有 `[[...slug]]`，返回值的格式也不同。

对于 `pages/posts/[id].js` 最基本的这种动态路由，`getStaticPaths()` 返回的 paths 应该类型如下：

    let paths = [
        {params:{ dynamic: 'dynamic' }},
        {params:{ dynamic: 'pass' }},
        {params:{ dynamic: 'sideway' }},
        {params:{ dynamic: 'more' }},
    ]
    return { paths, fallback: false }

根据这个返回值，Nexxt.js 知道要静态渲染的文件是 `posts/1` 和 `posts/2`，返回空数组就表示没有要渲染的页面同。


对于多参数的这种路由 `pages/posts/[postId]/[commentId]`，则相应地在 `params` 参数中包含 postId 和 commentId 两个字段。

对于 catch-all 形式的路由，比如 `pages/[...slug]`，那么 `params` 参数中应该包含一个 slug 数组。 比如 `{slug:['foo', 'bar']}`，然后 Next.js 会生成静态页面 `/foo/bar`。

示范如何给 `[...catchall]` 路由返回路径信息：

    let paths = [
        {params:{ catchall: ['Catch', 'All'] }},
        {params:{ catchall: ['pass'] }},
        {params:{ catchall: ['sideway'] }},
        {params:{ catchall: ['more'] }},
    ]
    return { paths, fallback: false }


最后一种是 optional catch-all，是可选形式的 catch-all，可以在 `params` 设置 null, [], undefined 或者 false 都可以，表示匹配路由文件所在的一级目录，这就是可选的灵活性。 例如设置 `{ params: {slug: false} }` 那么，对于 `/pages/[[...slug]]` 路由 Next.js 会为其静态生成 `/` 索引页面。


如果返回包含 `{ fallback: true }` 则改变 `getStaticProps()` 函数的行为：

- 原本由 `getStaticPaths()` 返回的路径将在生成时由 `getStaticProps()` 渲染。
- 构建时未生成的路径不会返回 404 页面。相反，Next..js 将在第一次请求这样的路径时提供 fallback 版本的页面。
- 在后台，将静态生成请求的路径 HTML 和 JSON，这包括运行 `getStaticProps()`。
- 完成后，浏览器将接收生成路径的 JSON 用于自动呈现带有所需 props 数据的页面。从用户的角度来看，页面将从备用页面切换到完整页面。
- 同时，Next.js 将此路径添加到预渲染页面的列表中，对后续请求同一路径时将再次生成页面，就像构建时预呈现的其他页面一样。

注意，Next.js 使用 next export 执行静态 HTML 导出时不支持 fallback 为 true。

还有一个场景需要使用 fallback: true，那就是对于超大生成量的站点，如果要一次性生成所有的页面，似乎是永远也不可能完成的，那么这时就需要告诉 Next.js 可以在后续请求时再执行生成，结合 `getStaticProps()` 返回值 revalidate。

对于 fallback 版本页面，有两个特点：

- 页面的 props 参数为空。
- 使用 Router 对象可以检测是否处于 fallback 页面状态，`router.isFallback` 返回 true 表示是回退版本页面。

参考示范：

```ts
// pages/posts/[id].js
import { useRouter } from 'next/router'

function Post({ post }) {
  const router = useRouter()

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>
  }

  // Render post...
}

// This function gets called at build time
export async function getStaticPaths() {
  return {
    // Only `/posts/1` and `/posts/2` are generated at build time
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    // Enable statically generating additional pages
    // For example: `/posts/3`
    fallback: true,
  }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`https://.../posts/${params.id}`)
  const post = await res.json()

  // Pass post data to the page via props
  return {
    props: { post },
    // Re-generate the post at most once per second
    // if a request comes in
    revalidate: 1,
  }
}

export default Post
```

如果是 `{fallback is 'blocking'}` 阻塞方式，访问未在 `getStaticPaths()` 函数返的回路径将进入阻塞，等待 HTML 生成，这种方式与 SSR 相同。生成后缓存以供将来的请求使用，因此每个路径只发生一次，过程如下：

- `getStaticPaths()` 函数返的回路径会在构建过程中由 `getStaticProps()` 渲染为 HTML。
- 构建时未生成的路径不会返回 404 页面，相反，Next.js 将在第一次请求时执行 SSR 返回生成的 HTML。
- 完成后，浏览器将接收为路由路径生成的 HTML，从用户的角度来看，它将从浏览器正在请求页面的状态，过渡到已经加载整个页面的状态。没有加载/回退状态的闪烁。
- 同时，Next.js 将此路径添加到预呈现页面的列表中。对同一路径的后续请求将用生成的页面提供服务，就像构建时预呈现的其他页面一样。
- `{fallback is 'blocking'}` 方式在默认情况下不会更新生成的页面，要更新生成的页面，请结合使用增量静态重新生成。




### getStaticProps 静态化数据生成函数
- https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
- https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration
- https://nextjs.org/docs/basic-features/data-fetching#write-server-side-code-directly
- https://next-code-elimination.now.sh/

注意，`getStaticProps()` 是只在服务器端执行的函数，可以导入顶级作用域中的模块，在 `getStaticProps()` 中使用的导入模块将不会绑定到客户端。

这意味着可以直接在 `getStaticProps()` 编写服务器端代码，这包括从文件系统或数据库读取，反过来说，这就是在组件中写服务器端代码的地方，你不能直接在页面脚本的其它地方使用服务端专用的 API。

如果在客户端执行服务端的功能代码，比如 Node 的 FileSystem API 这就会导致应用运行出错。即错误地将服务器端的代码打包到了客户端，典型的错误提示如下：

    Uncaught TypeError: fs__WEBPACK_IMPORTED_MODULE_1___default.a.readdirSync is not a function


参考 `getStaticProps()` 函数原型：

```ts
export async function getStaticProps(context) {
  const postData = getPostData(context.params.id)
  return {
    props: {
      postData
    }
  }
}
```

`getStaticProps()` 函数的返回值应该包含当前页面组件需要的输入参数对象：

- **props** - 唯一必需的，包含的组件参数对象，会传递到后面要渲染的组件上，是一个可以串行化的对象，因为即使在服务器端生成，最终还是需要发往客户端重现。
- **revalidate** - 可选，指定在一定秒数后可以再重新生成，与 `{fallback: true}` 完美结合。因为可以指定一个更新时间周期，Next.js 会在这段时间后尝试更新静态生成。参考增量静态生成 Incremental Static Regeneration。
- **notFound** - 可选，boolean 值指定是否要返回一个 404 状态页面，此时不需要 `{fallback: false}`。
- **redirect** - 可选，允许重定向到内部或外部资源，设置值类似 `{ destination: string, permanent: boolean }`，除了使用 `permanent` 属性表示页面地址迁移，还可以使用 `statusCode` 替代它，但不能同时使用。

`getStaticProps()` 函数的输入参数是一个上下文对象，context 包含以下内容：

- **params** 包含动态路由参数信息，比如页面 `[id].js` 会收到类似 `{ id: ... }` 这样的路由参数，应该结合 `getStaticPaths()` 考虑。
- **preview** 指示是否处于 Preview Mode 预览模式。
- **previewData** 包含 `setPreviewData()` 函数设置的预览模式状态数据。
- **locale** 包含当前区域信息，如果是启用状态。
- **locales** 包含所有支持的区域信息，如果是启用状态。
- **defaultLocale** 包含配置的默认区域信息，如果是启用状态。


使用示范，根据数据决定是否要重定向：

```ts
export async function getStaticProps(context) {
  const res = await fetch(`https://...`)
  const data = await res.json()

  if (!data) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {}, // will be passed to the page component as props
  }
}
```

使用示范，根据数据决定是否反回 404 页面：

```ts
export async function getStaticProps(context) {
  const res = await fetch(`https://.../data`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {}, // will be passed to the page component as props
  }
}
```

以下情况是使用 getStaticProps 的最佳场景：

- 页面所需的数据在用户请求之前的构建过程就可用。
- 数据来自 Headless CMS 系统。
- 数据可以公开缓存，不对特定于用户。
- 页面必须预先呈现，用于 SEO，并且速度非常快，getStaticProps 生成 HTML 和 JSON 文件都可以由 CDN 缓存以提高性能。


以处理 md 文档为为例，组件在静态化生成时基本的工作流程如下：

- 开始静态化生成，读取要处理的页面组件文件列表，并生成路由信息，根据路由确定页面是否依赖数据进行渲染；
- Next.js 通过组件名称 `pages/tutorial/[slug].tsx` 知道使用了动态路由，并且导出的构造期要执行的数据获取 API；
- 在执行页面组件的渲染前，调用 `getStaticPaths()` 获取路由参数的具体值列表，这个列表相对应多个页面，具体是一个 md 文件对应一个页面；
- 路由数据列表的数据逐个发送到 `getStaticProps()` 以获取页面组件渲染时依赖的数据，具体将 md 文件的内容加载进来；
- 接着，将上一步得到的数据传入组件的渲染函数进行静态生成；

综合来说就是三个步骤：

- `getStaticPaths()` 导出函数解决的是，确定页面文件与动态路由的映射关系，即路径依赖，通过此函数就可以确定要渲染的页面数量。这一个函数确定的路由映射相当于根据用户请求页面的这样一个动作，根本上就是路径数据。
- 然后，将路径数据传入 `getStaticProps()` 导出函数以获取相应的数据，它解决的是页面对数据的依赖。
- 页面组件根据数据确定渲染逻辑，完成最后的静态生成。

在开发过程中，使用了开发服务，是进行动态的服务端渲染，所以以上二个函数不需要执行，也不接收只在请求时才有效的数据。在未来的版本中，getStaticProps 会在每次请求时运行。

而对于服务端渲染，`getServerSideProps()` 导出函数每一次请求页面时都会执行，并将获取到的数据返回给页面的渲染函数，或者类组件的构造函数。

在静态渲染的过程中，有一个比较隐晦点，就是路由与 Linkg 组件的搭配上，使用不同的路由方式，Link 设置有差别。动态路由有三种基本形式，`[slug]` 和 `[...slug]` 还有 `[[...slug]]`，而且可以用在目录命名上。在静态生成时。这部分的数据是通过  `getStaticPaths()` 函数产生的，而不是客户端通过 Link 组件产生的，这就要求生成数据需要与 Link 组件设置的保持一致，非则就不能正常工作。

    <Link
      href={{
        pathname: '/blog/[slug]',
        query: { slug: 'my-post' },
      }}
    >
      <a>Blog Post</a>
    </Link>


使用 `getStaticProps()` 并不意味失去动态内容特性，通过增量静态重新生成 Incremental Static Regeneration，可以实现流量进入时在后台执行重新生成。

受 stale-while-revalidate 启发，参考 RFC5861 文档，HTTP Cache-Control Extensions for Stale Content 无状态内容缓存扩展。后台重新生成可以确保为客户流量提供不中断的服务，总是从静态存储提供，而最新生成的页面会在完成时推送。revalidate 和 fallback: true 可以很好地搭配实现，按需要更新内容。

可伸缩的静态内容，不同于传统 SSR，增量静态重新生成的好处还包括：

- 没有延时峰值，页面持续快速提供服务。
- 页面从不离线，即使后台的重新生成失败，旧最近一次更新也处于正常服务。
- 低数据库和后端负载，页面最多并发执行一次重新计算。


```ts
function Blog({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li>{post.title}</li>
      ))}
    </ul>
  )
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  const res = await fetch('https://.../posts')
  const posts = await res.json()

  return {
    props: {
      posts,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  }
}

export default Blog
```

执行数据请求时，还可能会用到 `__dirname`, `__filename`, `process.cwd()` 等 Node 变量或路径信息，当前目录 CWD 总是指向 Next.js 执行的目录。



### getServerSideProps 服务端渲染函数
- https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
- https://nodejs.org/api/http.html#http_class_http_incomingmessage
- https://nodejs.org/api/http.html#http_class_http_serverresponse

在页面中导出 `getServerSideProps()` 异步函数和导出 `getStaticProps()` 函数非常类似，都是获取页面渲染需要的数据。

它们的差别是，前者在每次请求都会执行，而后者只在构建时才会执行。

```ts
export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
```

所有 context 参数包含 `getStaticProps()` 函数输入参数 context 所有内容，同时还有增加部分：

- **req** 来自客户端的 HTTP IncomingMessage；
- **res** 来自服务端的 HTTP response；
- **query** 来自客户端的查询字符串；
- **resolvedUrl** 规范化处理后的请求 URL，过滤了客户端 `_next/data` 转换前缀，同时包含原始请求值。


包含 `getStaticProps()` 函数输入参数 context 部分：

- **params** 包含动态路由参数信息，比如页面 `[id].js` 会收到类似 `{ id: ... }` 这样的路由参数，应该结合 `getStaticPaths()` 考虑。
- **preview** 指示是否处于 Preview Mode 预览模式。
- **previewData** 包含 `setPreviewData()` 函数设置的预览模式状态数据。
- **locale** 包含当前区域信息，如果是启用状态。
- **locales** 包含所有支持的区域信息，如果是启用状态。
- **defaultLocale** 包含配置的默认区域信息，如果是启用状态。


`getServerSideProps()` 函数应该返回的对象包含的值也类似，少了 `revalidate`，也没有 `fallback`：


- **props** - 唯一必需的，包含的组件参数对象，会传递到后面要渲染的组件上，是一个可以串行化的对象。
- **notFound** - 可选，boolean 值指定是否要返回一个 404 状态页面。
- **redirect** - 可选，允许重定向到内部或外部资源，设置值类似 `{ destination: string, permanent: boolean }`，除了使用 `permanent` 属性表示页面地址迁移，还可以使用 `statusCode` 替代它，但不能同时使用。


示范 `notFound` 使用：

```ts
export async function getServerSideProps(context) {
  const res = await fetch(`https://...`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {}, // will be passed to the page component as props
  }
}
```


示范 `redirect` 使用：

```ts
export async function getServerSideProps(context) {
  const res = await fetch(`https://.../data`)
  const data = await res.json()

  if (!data) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {}, // will be passed to the page component as props
  }
}
```



## 👉 Markdown & Webpack Loader
- https://webpack.docschina.org/concepts/loaders/#using-loaders
- https://webpack.js.org/contribute/writing-a-loader/
- https://www.webpackjs.com/api/loaders/
- https://www.npmjs.com/package/remark
- https://www.npmjs.com/package/markdown-loader
- https://www.npmjs.com/package/gray-matter
- https://nextjs.org/docs/api-reference/next.config.js/introduction
- https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
- https://github.com/vercel/next.js/tree/canary/examples/blog-starter-typescript
- https://www.nextjs.cn/learn/basics/dynamic-routes/render-markdown
- [File System](https://nodejs.org/docs/latest-v9.x/api/fs.html)


添加 Markdown 文档功能，作为简洁的内容格式，必需要支持 MD 文件内容呈现。

在 packages.json 添加依赖，再执行 npm install 安装：

```js
"devDependencies": {
  "markdown-loader": "^5.1.0",
  "html-loader": "^1.3.2",
  "gray-matter": "^4.0.2",
  "marked": "^1.1.1",
  "@types/marked": "^1.2.2",
},
```

- markdown-loader 用于编译打包时转换 markdown 文件为 HTML 字符串；
- html-loader 将 HTML 字符串转换为模块；
- marked 可以选择在运行时转译 markdown 文件，可以用它来做客户端的渲染；

另外，MD 文件头还可以定义 YAML 数据叫做 Front-Matter，可以使用 gray-matter 解析：

    ---
    title: 'Dynamic Routing and Static Generation'
    excerpt: 'In Next.js you can add brackets to a page ([param]) to create a dynamic route.'
    coverImage: '/assets/blog/dynamic-routing/cover.jpg'
    date: '2021-02-03T03:01:07.322Z'
    author:
      name: Jeango
      picture: '/jeango.jpg'
    ogImage:
      url: '/20161106s.jpg'
    ---


接下来要给 Webpack 配置好 markdown 和 html 加载器，因为：

```js
{
    module: {
        rules: [{
            test: /\.md$/,
            use: [
                {
                    loader: "html-loader"
                },
                {
                    loader: "markdown-loader",
                    options: {
                        /* your options here */
                    }
                }
            ]
        }]
    }
}
```

所谓 Webpack 加载器只是一个导出为函数的 JavaScript 模块，目的是为打包时加载指定类型文件。loader runner 会调用这个函数，然后把上一个 loader 产生的结果或者资源文件传入进去。函数的 this 上下文将由 Webpack 填充，并且 loader runner 具有一些有用方法，可以使 loader 改变为异步调用方式，或者获取 query 参数。

其中 raw-loader 是最简单的一个，可让将文件按原样加载。

    npm install --save-dev raw-loader

使用加载器，可以在 CLI 命令行中使用，也可以在代码内联使用加载器，或者通常配置方式使用。

    # CLI
    webpack --module-bind 'txt=raw-loader'

    # inline 
    import txt from 'raw-loader!./file.txt';
    let txt = require('raw-loader!./file.text');

    # via config
    import txt from './file.txt';

其中 inlineLoaders 这种使用方式，可以嵌套多个加载器，它们会从左到右执行，其中问号用于指定参数：

    import 'style-loader!css-loader!stylus-loader?a=b!../../common.styl'

对单文件打包的方式的加载器被称为 inline-loader。

先明确一点，Webpack 只认模块，所有模块都是 JavaScript 代码模块，将不合法的内容加载到 Webpack 后报错，提示信息大体的意思是说，在解析模块过程中遇到了非法字符，需要其它加载器来处理它：

    Module parse failed: Unexpected token (1:0)
    File was processed with these loaders:
     * ./node_modules/markdown-loader/index.js
    You may need an additional loader to handle the result of these loaders.

如果看到的是以下提示，表明没有处理相应文件类型的加载器，需要检查配置文件是否名字写错了，配置内容是否错了：

    Module parse failed: Unexpected character '#' (1:0)
    You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file.

而加载器机制的引入，使用得 Webpack 能够处理其他类型的文件，并将它们转换为有效模块，以供应用程序使用，以及被添加到依赖地图中。

在 Webpack 官方文档 Module 模块的 `Rule.enforce` 配置属性定义加载的执行阶段划分：

- pre 对应 preloader 前期加载器；
- post 对应 postloader 后期加载器；
- 空值表示 normal loader 一般加载器；

加载器有 4 种加载工作方式，pre，normal，inline，post，这也是执行顺序。加载过程分为 `Pitching` 和 `Normal` 两个阶段，类似于 JavaScript 中的事件冒泡、捕获阶段，官方文档描述为 loader 标记阶段（mark stage）和执行阶段（execution/run stage）。

感叹号作为加载器的处理规则：

- !  - 前缀禁用已配置的 normal loader，比如：require("!raw!./script.coffee")
- !! - 前缀禁用已配置的所有 loader，比如：require("!!raw!./script.coffee")
- -! - 前缀禁用已配置的 preloader 和 normal loader，不包括 postloader，比如：require("-!raw!./script.coffee")


You may need an additional loader to handle the result of these loaders.

    import html from 'markdown-loader!../../docs/tutorial-assets.md'


通过配置文件可以指导 Webpack 打包时，自动按文件类型执行加载器，配置文件名为 `webpack.config.js`。对于 Next.js 项目，配置文件改名作 `next.config.js` 如下，指明加载器对应加载的文件类型，需要注意文档的说明，配置 Webpack 要指定到对应的项：

```ts
let webpackConfig = (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  config.module.rules.push(
    {
      test: /\.md$/,
      use: [
      { loader: "html-loader" },
      { loader: "markdown-loader", options: { /* your options here */ } }
      ]
    }
  );
  return config
}

module.exports = (phase, { defaultConfig }) => {
  // if (phase === PHASE_DEVELOPMENT_SERVER) 
  // return {...defaultConfig, ...webpackConfig};
  defaultConfig.webpack = webpackConfig;
  return defaultConfig;
}
```

如果没有加载器，直接导入文本就会当作代码处理，这样就会导致出错。

在 TypeScript 中，还需要给 md 文件类型进行通用的类型声明，否非 TypeScript 不知如何处理这样的数据类型，类型声明可以直接追加到 `next-env.d.ts`：

```ts
declare module "*.md" {
    const content: string;
    export default content;
}
```


接下来编写组件来加载 MD 文档，注意这里是服务端进行渲染处理：

```ts
import Marked, {Renderer} from 'marked'
import content from '../../docs/tutorial-assets.md'

Marked.setOptions({
    renderer: new Renderer(),
    gfm: true,
    // tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false
});
// let output = Marked(md, opts)
// let content = Marked('I am using **__markdown__**.')
// const content = Marked(marked)

export default function(){
    return <div dangerouslySetInnerHTML={{__html:`${content}`}}></div>;
} 
```

假设在一些高可用的服务中，服务端渲染可能需要降低负载以提供更好的服务，需要将一部分的算力迁向客户端进行。

也可以参考 blog-starter-typescript 示范中使用的 remark 模块：

    import remark from 'remark'
    import html from 'remark-html'

    export default async function markdownToHtml(markdown: string) {
      const result = await remark().use(html).process(markdown)
      return result.toString()
    }

例子中使用的 MD 文档，这需要页面获取外部数据进行的静态预渲染方式，为了使页面获取外部数据后再渲染，就必须导出 `getStaticPaths`，通常还要同时使用 `getStaticProps`。

接下来要掌握的内容涉及页面的渲染方式、数据的获取和动态路由，等内容，而且是混合的整体密不可分。


一个容易的学习路径是：

- 掌握动态路由的基本使用；
- 掌握页面的渲染方式，主要是有数据依赖的静态渲染方式；
- 将页面的渲染方式与数据获取 API 结合，`getStaticPaths`和`getStaticProps`。

当然，数据获取这部分可能还需要使用 Fetch API 或者文件处理，或者数据之类的方法。


为了示范读取 Markdown 文档，需要一个编写一个 API 文件来处理。注意，这是服务器端代码，请在`getStaticPaths`和`getStaticProps`函数内调用：

```tsx
import FileSystem from 'fs'
import path, { join, dirname, parse } from 'path'
import matter from 'gray-matter'

export type FrontMetter = {
  title: string,
  date: string,
  slug: string,
  author: { name: string, picture: string },
  content: string,
  excerpt: string,
  coverImage: string,
}
export type MetterKey = keyof FrontMetter;

export type SlugTree = {
  folder: string,
  list: string[],
  tree?: SlugTree[],
}

/**
 * @param {string} folder path to the root, default: Docs
 * @returns {SlugTree} markdown filenames
 * @see
 * Server-side code
 * API exported from this script should be use only in getStaticProps()
 * where is a proper place to write server-side codes.
 * See also:
 * https://next-code-elimination.now.sh/
 * https://www.nextjs.cn/docs/basic-features/data-fetching#write-server-side-code-directly
 */
export function getPostSlugs(folder: string = 'Docs'): SlugTree {
  let subs: string[] = []
  let path = join(process.cwd(), folder)
  let list = FileSystem.readdirSync(path)
  console.log("====== getPostSlugs", folder)
  list.map((it, id) => {
    let sta = FileSystem.statSync(join(path, it))
    if (sta.isDirectory()) {
      subs.push(join(folder, it))
      delete list[id]
    } else {
      // for base with extension
      list[id] = [...folder.split(/\/|\\/).splice(1), parse(it).name].join("/")
    }
  })
  list = list.filter(it => !!it)
  let tree = subs.map(it => getPostSlugs(it))
  return { folder, list, tree };
}

/**
 * @param {fields} markdown file's front-matter fields be return
 * @param {string} folder path to the root, default: Docs
 * @see
 * Server-side code
 * API exported from this script should be use only in getStaticProps()
 * where is a proper place to write server-side codes.
 * See also:
 * https://next-code-elimination.now.sh/
 * https://www.nextjs.cn/docs/basic-features/data-fetching#write-server-side-code-directly
 */
export function getPosts(fields: MetterKey[] = [], slugs: string[] = [], folder: string = 'Docs') {
  console.log("====== getPosts", slugs, folder)
  if (!slugs.length) {
    const tree = getPostSlugs(folder)
    slugs = tree.list
  }
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.title > post2.title ? 1 : -1))
  return posts
}
/**
 * @param slug 
 * @param fields 
 * @param folder 
 * @see
 * Server-side code
 * API exported from this script should be use only in getStaticProps()
 * where is a proper place to write server-side codes.
 * See also:
 * https://next-code-elimination.now.sh/
 * https://www.nextjs.cn/docs/basic-features/data-fetching#write-server-side-code-directly
 */
export function getPostBySlug(slug: string[] | string, fields: MetterKey[] = [], folder: string = 'Docs') {
  const realSlug = ((typeof slug === 'string') ? slug : join(...slug)).replace(/\.md$/, '')
  const fullPath = join(join(process.cwd(), folder), `${realSlug}.md`)
  const fileContents = FileSystem.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  console.log("====== getPostBySlug", slug, fullPath, data.title)

  const items: FrontMetter = {} as FrontMetter

  // populate front-matter data and exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}
```

基于数据依赖的静态渲染方式再对 MD 呈现组件改造，文件名为 `pages/tutorial/[slug].tsx` ，使其能在构建时处理 docs 目录下的文档：

```tsx
import {useRouter} from 'next/router'
import { getPostBySlug, getPostSlugs, FrontMetter } from '../../utils/api'
import Layout from '../../components/layout'
import Marked, {Renderer} from 'marked'
import utilStyles from '../../styles/utils.module.css'

Marked.setOptions({
    renderer: new Renderer(),
    gfm: true,
    // tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false
});

export default function Markdown({post}: {post: FrontMetter}){
    let router = useRouter()
    console.log("Markdown", router.query, router.asPath);
    
    let slug = router.query.slug as string;
    let md = post.content ?? "<h1>NOT FOUND</h1>";
    let handle = (ev:any) => {
        console.log(slug, md, ev);
        alert(slug);
    }
    return (
        <Layout>
            {/* <h1 onClick={handle}>{post.title}</h1> */}
            <div className="rows fxBetween">
            <img src={post.author.picture} width="64px"
            className={utilStyles.borderCircle}
            alt={post.author.name} srcSet=""/>
            <p className={`fxSelfEnd ${utilStyles.panel}`}>
            {post.author.name} {new Date(post.date).toLocaleString()}
            </p>
            </div>
            <div dangerouslySetInnerHTML={{__html:`${md}`}}></div>
        </Layout>
    );
}

type Params = { params: { slug: string[]|string } }

export async function getStaticProps({ params }: Params) {
  console.log("++++++[...slug] getStaticProps", params);
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'excerpt',
    'coverImage',
  ])
  const content = Marked(post.content || '')

  return {
    props: {
      post: { ...post, content }
    },
  }
}

export async function getStaticPaths(context:any) {
  const slugTree = getPostSlugs()
  let locale = context.locale ?? 'zh-CN';
  let paths = slugTree.list.map((slug) => {
    return { locale, params: { slug: [slug] } }
  })
  slugTree.tree?.map(it => {
    let dir = it.folder.split(/\/|\\/).splice(1)
    paths = paths.concat(
      it.list.map(slug => {
        return { locale, params: { slug: slug.split('/') } } 
      })
    )
  })

  console.log("++++++[...slug] getStaticPaths", context, JSON.stringify(paths));
  return {
    fallback: false,
    paths,
  }
}
```


组件在静态化生成时基本的工作流程如下：

- 开始静态化生成，读取要处理的页面组件文件列表，并生成路由信息，根据路由确定页面是否依赖数据进行渲染；
- Next.js 通过组件名称 `pages/tutorial/[slug].tsx` 知道使用了动态路由，并且导出的构造期要执行的数据获取 API；
- 在执行页面组件的渲染前，调用 `getStaticPaths()` 获取路由参数的具体值列表，这个列表相对应多个页面，具体是一个 md 文件对应一个页面；
- 路由数据列表的数据逐个发送到 `getStaticProps()` 以获取页面组件渲染时依赖的数据，具体将 md 文件的内容加载进来；
- 接着，将上一步得到的数据传入组件的渲染函数进行静态生成；

经过编译后的静态页面其实是 JavaScript 脚本打包，一个页面对应一个包，因为这里使用了数据依赖和动态路由，所以同一个页面文件会合成多个页面模块。

参考编译结果，生成的文件存放于 `.next\server`:

    Page                                                           Size     First Load JS
    ┌ ○ /                                                          1.99 kB        72.7 kB
    ├   /_app                                                      0 B            62.8 kB
    ├ ○ /404                                                       3.46 kB        66.2 kB
    ├ ○ /authors/me                                                2.86 kB        65.6 kB
    ├ ○ /posts/build                                               1.03 kB        71.7 kB
    ├ ○ /posts/first-post                                          398 B          63.2 kB
    ├ ○ /posts/posts                                               1.95 kB        64.7 kB
    ├ ○ /posts/tutorial-assets                                     396 B          78.9 kB
    └ ● /tutorial/[slug]                                           624 B          79.1 kB
        ├ /tutorial/tutorial-assets
        ├ /tutorial/tutorial-basic
        ├ /tutorial/tutorial-layout
        └ [+4 more paths]
    + First Load JS shared by all                                  62.8 kB
      ├ chunks/29a50e9f3321aecabd6955269b6480445960261d.c82de7.js  13.1 kB
      ├ chunks/framework.abffcf.js                                 41.8 kB
      ├ chunks/main.a529c7.js                                      6.63 kB
      ├ chunks/pages/_app.264736.js                                558 B
      ├ chunks/webpack.50bee0.js                                   751 B
      └ css/8071b5039535e22652c6.css                               532 B

    λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
    ○  (Static)  automatically rendered as static HTML (uses no initial props)
    ●  (SSG)     automatically generated as static HTML + JSON (uses getStaticProps)
       (ISR)     incremental static regeneration (uses revalidate in getStaticProps)




## 👉 API Routes
- https://www.nextjs.cn/learn/basics/api-routes/setup
- https://www.nextjs.cn/docs/api-routes/introduction
- https://nextjs.org/docs/advanced-features/preview-mode
- https://nodejs.org/docs/latest-v9.x/api/http.html#http_class_http_incomingmessage
- https://github.com/vercel/next.js/tree/canary/examples/api-routes
- https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#preflight预检
- https://github.com/senchalabs/connect

Next.js 提供 API Routes 可以创建 API 结点，只需要在 `pages/api` 目录下导出类似以下的方法：

```ts
// req = request data, res = response data
export default (req, res) => {
  res.status(200).json({ text: 'Hello' })
  // ...
}
```

注意，API Routes 不可以与 `next export` 功能同时使用。

访问这个 API http://localhost:3000/api/hello 将得到 {"text":"Hello"}。

- req 是 http.IncomingMessage 对象实例，外加预置中间件处理包装成 NextApiRequest；
- res 是 http.ServerResponse 对象实例，外加辅助函数包装成 NextApiResponse；

禁止从 `getStaticProps()` 或 `getStaticPaths()` 访问 API Route，因为这两个方法是在构建过程中使用的，此时访问 API Route 意味着服务还未准备好就使用了。

以下示范 API 如何处理不同的客户端数据，并填充 `req.body`：

```ts
import {IncomingMessage, ServerResponse} from 'http'
import {NextApiRequest, NextApiResponse} from 'next'

/**
 * /api/echo.ts
 * req = request data, res = response data
 * curl http://localhost:3000/api/echo -d "a=1&b=2"
 * curl http://localhost:3000/api/echo -d "{a:1, b:2}"
 * curl http://localhost:3000/api/echo -d "{""a"":1, ""b"":2}" -H "Content-Type: "
 * curl http://localhost:3000/api/echo -d "{""a"":1, ""b"":2}" -H "Content-Type: "
 */
export default async (req:NextApiRequest, res:NextApiResponse) => {
  let { headers, httpVersion, method, url, statusCode, statusMessage } = req;
  let json;
  try{
    json = JSON.parse(req.body);
  }catch(ex){
    json = `${ex.message}[req.body:${typeof req.body}]`;
  }
  res.status(200).json({ 
    text: 'Hello', 
    data: req.body,
    query: req.query,
    json,
    req:{ headers, httpVersion, method, url, statusCode, statusMessage },
    types: {res: typeof res, req: typeof req }
  })
}
```

通过 CURL 工具 POST 提交不同的数据，没有指定 Content-Type 表示使用默认的 `application/x-www-form-urlencoded`，此时，提交的数据会当作键值对处理。`application/json` 和 `binary/octet-stream` 分别作为 JSON 对象和未知类型的原始 binary 数据处理。原始数据还可以使用 `application/octet-stream`，多文件上传时会有 `multipart/form-data` 类型。

服务器响应对象 res 包含了多个 Express.js 风格的助手方法，可以解化开发 API 结点的工作：

- **res.status(code)** - 向客户端发送 HTTP 响应状态代码；
- **res.json(json)** - 向客户端发送 JSON 响应；
- **res.send(body)** - 向客户端发送 HTTP 响应，可以是字符串、对象或者 Buffer；
- **res.redirect([status,] path)** - 向客户端发送一个重定向响应，默认的状态码是 307 即临时重定向 "Temporary redirect"。


参考 Vercel Next.js 示范代码仓库相关的示例： 

- Basic API Routes
- API Routes with middleware
- API Routes with GraphQL
- API Routes with REST
- API Routes with CORS
- API Routes with middleware

API Routes 的一个好用例是处理表单输入，API 路由结点并不打包在客户端，可以编写代码将保存到数据库。

```ts
export default function handler(req, res) {
  const email = req.body.email
  // Then save email to your database, etc...
}
```

Preview Mode 预览模式，当页面要从 HCMS 获取数据时，静态生成非常有用。然而，当你在 HCMS 上写草稿并且想要在你的页面上立即预览草稿时，这并不理想。你想要的不是在 Next.js 构建时呈现的页面，并获取草稿内容而不是发布的内容。这时需要 Next.js 仅在这种特定情况下绕过静态生成的流程。这就是 Preview Mode 特性，它来解决上述问题，它利用了 API 路由。

API 路由也可以是动态的，就像普通页面一样，具体参数动态路由。

例如，API 路由 `pages/api/post/[pid].js` 如下：

```jsx
export default function handler(req, res) {
  const {
    query: { pid },
  } = req

  res.end(`Post: ${pid}`)
}
```

请求 `/api/post/abc` 会得到 `Post: abc`。


以下 API route 是扩展路由 `pages/api/post/[...slug].js`：

```jsx
export default function handler(req, res) {
  const {
    query: { slug },
  } = req

  res.end(`Post: ${slug.join(', ')}`)
}
```

可以匹配 `/api/post/a`, `/api/post/a/b`, `/api/post/a/b/c` 等等。还可以介绍过的可选的扩展路由 `[[...slug]]`，都是有效的。


API Routes 默认没使用 CORS 头，即不允许非同源请求操作，可以使用 Next.js 内建的 API Middlewares 中间件 CORS Middleware 来设置。

中间件会自动解析 req 对象的数据，并填充到以下对象：

- req.cookies - 包含客户端 cookies 值的对象；
- req.query - 包含请求 query 键值对的对象；
- req.body - 根据 content-type 解析得到的数据对象，如果是二进制可以解析为字符串；

通过导出配置一个 `config` 配置对象，每个 API Route 可以改变默认配置，列如约束的请求数据大小限制：

```js
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
      sizeLimit: '1000kb',
    },
  },
}
```

如果，API 路由接收的是 binary 数据，可以通过 `bodyParser` 来禁止解析：

```js
export const config = {
  api: {
    bodyParser: false,
  },
}
```

`externalResolver` 配置表示这个路由将使用外部解析器接管，如 Connect/Express 中间件，启用它可以禁止警告未解析的请求。

```js
export const config = {
  api: {
    externalResolver: true,
  },
}
```

除了使用 `setHeader()` 方法设置 CORS 标头：

```js
res.setHeader("Access-Control-Allow-Origin", "*");
res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
```

更好的方法是直接使用现有的 CORS 模块：

    npm i --save-dev @types/cors cors
    # or
    yarn add @types/cors cors

使用 CORS 模块编写中间件，可以配置项 `preflightContinue` ，这个先行的预检请求就是 CORS 跨域机制的 preflight（一个 OPTIONS 请求），该请求成功后才会发送真正的请求。 这一设计旨在确保服务器对 CORS 标准知情，以保护不支持 CORS 的旧服务器。

```ts
import Cors from 'cors'
import {NextApiRequest, NextApiResponse} from 'next'

// Initializing the cors middleware
const cors = Cors({
  origin: "*",
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  preflightContinue: true,
  optionsSuccessStatus: 204
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req:NextApiRequest, res:NextApiResponse, fn: any ) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

async function handler(req:NextApiRequest, res:NextApiResponse) {
  // Run the middleware
  await runMiddleware(req, res, cors)
  res.setHeader("Access-Control-Allow-Methods", "HEAD")
  // Rest of the API logic
  res.json({ message: 'Hello Everyone!' })
}

export default handler
```

使用 TypeScript 还可以对 req/res 进行扩展，通常为了类型安全，不建议这样做。

更好的是如以下使用纯函数进行包装：

```ts
// utils/cookies.ts

import { serialize, CookieSerializeOptions } from 'cookie'
import { NextApiResponse } from 'next'

/**
 * This sets `cookie` using the `res` object
 */

export const setCookie = (
  res: NextApiResponse,
  name: string,
  value: unknown,
  options: CookieSerializeOptions = {}
) => {
  const stringValue =
    typeof value === 'object' ? 'j:' + JSON.stringify(value) : String(value)

  if ('maxAge' in options) {
    options.expires = new Date(Date.now() + options.maxAge)
    options.maxAge /= 1000
  }

  res.setHeader('Set-Cookie', serialize(name, String(stringValue), options))
}
```

```ts
// pages/api/cookies.ts

import { NextApiRequest, NextApiResponse } from 'next'
import { setCookie } from '../../utils/cookies'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  // Calling our pure function using the `res` object, it will add the `set-cookie` header
  setCookie(res, 'Next.js', 'api-middleware!')
  // Return the `set-cookie` header so we can display it in the browser and show that it works!
  res.end(res.getHeader('Set-Cookie'))
}

export default handler
```

如果一定要进行类型扩展，可以定义自己的新类型以包含需要的属性：

```ts
// pages/api/foo.ts

import { NextApiRequest, NextApiResponse } from 'next'
import { withFoo } from 'external-lib-foo'

type NextApiRequestWithFoo = NextApiRequest & {
  foo: (bar: string) => void
}

const handler = (req: NextApiRequestWithFoo, res: NextApiResponse) => {
  req.foo('bar') // we can now use `req.foo` without type errors
  res.end('ok')
}

export default withFoo(handler)
```


## 👉 API Routes with GraphQL
- https://github.com/apollographql/apollo-server/tree/main/packages/apollo-server-micro
- https://github.com/vercel/next.js/tree/canary/examples/api-routes-graphql
- SWR - stale-while-revalidate https://github.com/vercel/swr
- Basic GraphQL Microservice https://www.npmjs.com/package/apollo-server-micro
- 轻量级嵌入式数据库 https://www.npmjs.com/package/sqlite3

Next.js 的 API routes 可以很容易实现 REST 接口，也可以集成 GraphQL API，参考示范工程 apollo-server-micro，提供了一个简单的 GraphQL 服务的客户应用。


首先安装模块：

    npm install apollo-server-micro@2.11.0 graphql@14.6.0 swr@0.1.18

- SWR 模块是 Vercel 提供处理远程数据依赖的 React Hooks 勾子函数，旨在通过缓存提高用户体验。
- GraphQL 模块是 JavaScript 语言的实现。
- apollo-server-micro 模块是最基本的 GraphQL Microservice 微服务。

SWR 表示 stale-while-revalidate，参考 RFC5861 文档，HTTP Cache-Control Extensions for Stale Content 无状态内容缓存扩展。

SWR 基本思想是数据可以不是最新的，最会在后台更新而 UI 尽快更新，即使用了旧数据。通过缓存机制包装 Fetch API，
在请求之前先从缓存返回数据（stale），然后在异步发送请求，最后当数据返回时更新缓存并触发 UI 的重新渲染，从而提高用户体验。

导出的 React Hook 函数 `useSWR()` 接收两个参数，一个 key 通常用 URL 地址充当作为请求的唯一标志，另一个是 `fetcher` 函数即真正去获取数据的函数，通常是经过包装的 Fetch API。在 SWR 需要获取数据时，调用 `fetcher` 函数并将 `key` 这个参数传入，函数以异步返回数据。

作为测试，可以使用 Sqlite3 作为数据：

    npm i --save-dev @types/sqlite3 sqlite3

安装好这几个依赖模块后，编写一个 GraphQL 微服务程序：

```ts
// /api/graphql.js
import { ApolloServer, gql } from 'apollo-server-micro'
import { GraphQLResolveInfo } from 'graphql'
////////////////////////////////////////////////////////////
const typeDefs = gql`
  type Query {
    sayHello: String
    users(name: String): [User!]!
  }
  type User {
    name: String
  }
`
const resolvers = {
  Query: {
    sayHello(parent, args, context, info: GraphQLResolveInfo) {
      return 'Hello World!';
    },
    users(parent, args, context, info: GraphQLResolveInfo) {
      let name = args.name ?? 'Next.js'
      return [{ name }]
    },
  },
}
////////////////////////////////////////////////////////////
export const config = {
  api: {
    bodyParser: false, // don't parse request body
  },
}
// curl localhost:3000/api/graphql?a=a -d "{""a"":1}" -H "Content-Type: binary/octet-stream"
// export default async (req:NextApiRequest, res:NextApiResponse) => {
//    res.json({query: req.query, body: req.body})
// }

// curl localhost:3000/api/graphql -d "{""query"":""{users{name}}""}" -H "Content-Type: application/json"
// curl localhost:3000/api/graphql -d "{""query"":""{users(name:\\""Walle\\""){name}}""}" -H "Content-Type: application/json"
const apolloServer = new ApolloServer({ typeDefs, resolvers })
export default apolloServer.createHandler({ path: '/api/graphql' })
```

访问 API 路由时启动 GraphQL 微服务，根据客户端查询内容返回相应的数据，这里只是用 `resolver()` 作为数据查询演示，并没有接收数据库。

其中，导出的配置参数 `bodyParser` 设置了不解析 Request Body 的数据，因此 req.body 也不会填充数据，可以提升效率。


示范使用 SWR 和 Fetch API 两种方式向 GraphQL 微服务查询数据：

```tsx
import useSWR from 'swr'
import Layout from '../../components/layout'

let fetcher = (query:any = null) => fetch(
  '/api/graphql', {
  method: "post",
  headers: {"Content-Type": "application/json"},
  body: JSON.stringify({ 
    query: query ?? `{
      users(name:"WALLE") {
        name
      }
      sayHello
    }`, config:{} })
  // body: JSON.stringify({query: `{users{name}}` })
})
.then(res => res.json())
//.then(txt => console.log(txt))



let GraphQL = () =>{
  let { data, error } = useSWR('{sayHello}', fetcher)

  return (
    <Layout>
    {<pre className="scroll card console">Output: {data}</pre>}
    </Layout>
  )
}

export default GraphQL;
```

注意，useSWR 是 React Hooks 函数只能在函数组件中使用，即在组件中不能用其它函数进行包装，返回值中如果没有数据表示加载中，或者出错了。

```jsx
import useSWR from 'swr'

function Profile() {
  const { data, error } = useSWR('/api/user', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return <div>hello {data.name}!</div>
}
```

以下示范使用 GraphQL 内置的类型定义 schema，其中 `resolve()` 函数可以返回一个值，一个或一组的 promise 异步处理对象，甚至更复杂的结构。

```js
import { graphql, GraphQLSchema, GraphQLObjectType, GraphQLString, } from 'graphql';

var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return 'world';
        },
      },
    },
  }),
});
```

客户提交一个 GraphQL 查询在被验证后，GraphQL 服务器会将之执行，并返回与请求的结构相对应的结果，该结果通常会是 JSON 的格式。 这一过程 GraphQL 不能脱离类型系统处理查询，所以查询的内容必须和服务器的类型定义保持一致。

## 👉 i18n-routing 国际化路由
- https://nextjs.org/docs/advanced-features/i18n-routing
- https://www.unicode.org/reports/tr35/tr35-59/tr35.html#Identifiers

配置区域信息：

```js
// 👉 /next.config.js 配置脚本
module.exports = {
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en-US', 'fr', 'nl-NL'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'en-US',
    // This is a list of locale domains and the default locale they
    // should handle (these are only required when setting up domain routing)

    // The automatic locale detection can be disabled with:
    localeDetection: false,

    domains: [
      {
        domain: 'example.com',
        defaultLocale: 'en-US',
      },
      {
        domain: 'example.nl',
        defaultLocale: 'nl-NL',
      },
      {
        domain: 'example.fr',
        defaultLocale: 'fr',
      },
    ],
  },
}
```

Next.js 10 项目的国际化调整分为两块：翻译，与路由，支持两种最常见的路由策略：子路径路由，与域路由。对于这两种策略，都需要先在 Next.js 配置中指定语言环境。

- Sub-path Routing 子路由将区域信息放在 URL 路径中，在 `locales` 指定想要支持的所有语言区域，在`defaultLocale`指定默认的语言区域。
- Domain Routing 域名路由

大部分 React 都提供翻译完成的应用程序，但却很少为您提供自动路由处理方案，而且通常只使用一种渲染策略。考虑到这一现实，在 Next.js 10 中发布对国际化路由以及语言检测的内置支持。

内置的国际化路由功能支持 Next.js 的混合策略，您可以在静态生成与服务器渲染之间自由做出选择。

Locales 代表的是 UTS 语言环境标识符，属于一种用于定义语言环境的标准化格式。通常，Locale 标识符由语言、区域与脚本组成，各元素之间使用破折号分隔`language - area - script`，其中的区域与脚本属于可选项。

例如：

- en-US - 在美国使用的英语
- nl-NL - 在荷兰使用的荷兰语
- nl    - 无特定使用区域的荷兰语

以上给定的区域信息配置中，有三种语言，其中法语 fr 没有指定区域信息，对于 `pages/blog.js` 页面来说，有效的访问地址可以是以下三个：

- /blog
- /fr/blog
- /nl-nl/blog

对于默认语言区域，`defaultLocale`的值不会在地址中前缀。

域路由意味着您将语言环境与顶级域名映射起来，例如，example.nl 可映射至 nl 语言环境，example.com 则映射至 en 语言环境。对于 `pages/blog.js` 页面，以下的域路由有效：

- example.com/blog
- example.fr/blog
- example.nl/blog
- example.nl/nl-BE/blog


Next.js 10 进行语言检测，在 / 路由上提供基于 Accept-Language 标头的内置语言检测功能，目前所有现代浏览器均支持此项检测。配置的语言环境将与 Accept-Language 标头相匹配，而后根据预设策略进行重新定向。

通过 Next.js Router 访问语言区域信息，`useRouter()` 勾子函数返回的实例包含：

- **locale** 当前活动的区域语言；
- **locales** 已配置的区域语言；
- **defaultLocale** 已配置的默认区域语言；

当进行静态预渲染时，页面的 `getStaticProps()` 或者 `getServerSideProps()` 方法可以从参数中获取。


通过 `next/link` 和 `next/router` 组件可以实现在各种语言间切换，在 Link 中指定 `locale`：

```ts
import Link from 'next/link'

export default function IndexPage(props) {
  return (
    <Link href="/another" locale="fr">
      <a>To /fr/another</a>
    </Link>
  )
}
```

或者直接使用 `next/router` 方法切换，将区域语言信息设置到路由中：

```ts
import { useRouter } from 'next/router'

export default function IndexPage(props) {
  const router = useRouter()

  return (
    <div
      onClick={() => {
        router.push('/another', '/another', { locale: 'fr' })
      }}
    >
      to /fr/another
    </div>
  )
}
```

再如，直接写入 `href` 属性：

```ts
import Link from 'next/link'

export default function IndexPage(props) {
  return (
    <Link href="/fr/another" locale={false}>
      <a>To /fr/another</a>
    </Link>
  )
}
```

对于非动态页面 Non-dynamic getStaticProps Pages，只需要一个页面就可以对应已配置的各种语言，如果不想要对某种语言进行预渲染，可以返回 notFound：

```ts
export async function getStaticProps({ locale }) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(`https://.../posts?locale=${locale}`)
  const posts = await res.json()

  if (posts.length === 0) {
    return {
      notFound: true,
    }
  }

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}
```

对于动态页面 Dynamic getStaticProps Pages，需要渲染对应语言的页面，就要在返回的路径列表中设置 `locale` 参数。

```ts
// pages/blog/[slug].js
export const getStaticPaths = ({ locales }) => {
  return {
    paths: [
      { params: { slug: 'post-1' }, locale: 'en-US' },
      { params: { slug: 'post-1' }, locale: 'fr' },
    ],
    fallback: true,
  }
}
```


搜索引擎优化
Next.js 能够感知用户所访问页面的语言类别，因此会自动将 lang 属性添加至标签当中。

但 Next.js 无法识别出页面的变体，因此需要由您使用 next/head 添加 hreflang 元标签。关于 hreflang 元标签的更多详细信息，请参阅 谷歌 Webmasters 说明文档。

Next.js 还将提供更多国际化选项
国际化路由只是 Next.js 一系列国际化功能中的一种，旨在降低项目国际化与本地化的实现难度。国际化路由能够与大部分 React 国际化库相集成。



## 👉 Preview Mode 预览模式
- https://nextjs.org/docs/advanced-features/preview-mode
- https://nextjs.org/docs/basic-features/data-fetching
- https://nextjs.org/docs/basic-features/pages

因为在静态生成页面时 Static Generation，对于有数据依赖的页面，可能会通过 `getStaticProps` 或 `getStaticPaths` 获取数据。

比如当页面要从 HCMS 获取数据时，然而，当你在 HCMS 上写草稿并且想要在你的页面上立即预览草稿时，这并不理想。你想要的不是在 Next.js 构建时呈现的页面，并获取草稿内容而不是发布的内容。这时需要 Next.js 仅在这种特定情况下绕过静态生成的流程。这就是 Preview Mode 特性，它来解决上述问题，它利用了 API 路由。

激活预览模式第一步是编写一个 Preview API 路由，比如 `pages/api/preview.js`，并在路由导出函数中调用 `setPreviewData()` 来设置 Cookie 信息，通知客户端激活了预览模式，默认的静态生成页面行为就会改变。该方法还设置了页面需要的数据，暂时设置空数据：

```ts
// A simple example for testing it manually from your browser.
// If this is located at pages/api/preview.js, then
// open /api/preview from your browser.
export default function handler(req, res) {
  res.setPreviewData({})
  res.end('Preview mode enabled')
}
```

可以通过开发工具查看 `__prerender_bypass` `__next_preview_data` 这两个 cookies 信息。

通常在此会以安全令牌方式查询外部的 Headless CMS 数据，即预览页面的 URL，然后，因为前面设置的 Cookies，`getStaticProps()` 会在每次请求时行，改变了原来在构建时执行的逻辑。并且，执行时传入的 context 参数包含以下内容：

- context.preview = true
- context.previewData




## 👉 Image & Optimization
- https://nextjs.org/docs/basic-features/image-optimization
- https://nextjs.org/docs/api-reference/next/image

```tsx
import Image from 'next/image'

function Home() {
  return (
    <>
      <h1>My Homepage</h1>
      <Image
        src="/me.png"
        alt="Picture of the author"
        width={500}
        height={500}
      />
      <p>Welcome to my homepage!</p>
    </>
  )
}

export default Home
```

如果使用外域的图片，需要在配置文件中设置相应的域名：

```ts
// next.config.js.

module.exports = {
  images: {
    domains: ['example.com'],
  },
}

```

要使用外部的云图片加载器，这样可以在 src 属性设置相对路径，并自动并入图片加载器，需要配置：

```ts
module.exports = {
  images: {
    loader: 'imgix',
    path: 'https://example.com/myaccount/',
  },
}
```

支持以下的云图片加载器:

- **Vercel**: 在 Vercel 部署时自动生效，免配置。
- **Imgix**: loader: 'imgix'
- **Cloudinary**: loader: 'cloudinary'
- **Akamai**: loader: 'akamai'




## 👉 next.config.js 配置脚本
- https://nextjs.org/docs/api-reference/next.config.js
- https://en.wikipedia.org/wiki/Content_delivery_network

环境变量配置：

```ts
module.exports = {
  env: {
    customKey: 'my-value',
  },
}
```

使用环境变量：

```ts
function Page() {
  return <h1>The value of customKey is: {process.env.customKey}</h1>
}

export default Page

```


要将应用配置在子目录中运行，请使用 basePath 指定。

```ts
module.exports = {
  basePath: '/docs',
}
```

在使用 `next/link` 和 `next/router` 组件的情况下，`basePath` 设置会自动更新。比如以下例子的 `/about` 会自动更新为`/docs/about`。

```ts
export default function HomePage() {
  return (
    <>
      <Link href="/about">
        <a>About Page</a>
      </Link>
    </>
  )
}
```

但是图片这些就不是了。


为 CDN 配置资源的路径前缀：

```ts
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? 'https://cdn.mydomain.com' : '',
}
```

Next.js 会自动为 JavaScript 和 CSS 文件的加载使用 `/_next/` 路径前缀，即指向 `.next/static/` 目录下的内容。

配置资源路径前缀并不影响以下路径：

- `/public` 目录，这里的文件如果要配置 CDN 就要自行处理。
- `/_next/data/` 下由 `getServerSideProps()` 请求的页面，因为它们不是静态内容。
- `/_next/data/` 下由 `getStaticProps()` 请求的页面，这些是为主域和增量静态生成使用。


配置构建输出目录：

```ts
module.exports = {
  distDir: 'build',
}
```

配置扩展名支持，包括 `next/mdx` 文档增强插件，MDX 让 Markdown 步入组件时代 MDX 是一种书写格式，允许在文档中无缝地插入 JSX 代码。

```ts
module.exports = {
  pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],
}
```

配置请请求头处理，支持 i18n 国际化：

```ts
module.exports = {
  i18n: {
    locales: ['en', 'fr', 'de'],
    defaultLocale: 'en',
  },

  async headers() {
    return [
      {
        // does not handle locales automatically since locale: false is set
        source: '/nl/with-locale-manual',
        locale: false,
        headers: [
          {
            key: 'x-hello',
            value: 'world',
          },
        ],
      },
      {
        // this matches '/' since `en` is the defaultLocale
        source: '/en',
        locale: false,
        headers: [
          {
            key: 'x-hello',
            value: 'world',
          },
        ],
      },
      {
        source: '/blog/:post(\\d{1,})',
        headers: [
          {
            key: 'x-post',
            value: ':post',
          },
        ],
      },
    ],
  },
}
```

地址重写配置 URL Rewrites：

```ts
module.exports = {
  basePath: '/docs',
  i18n: {
    locales: ['en', 'fr', 'de'],
    defaultLocale: 'en',
  },

  async rewrites() {
    return [
      {
        source: '/with-basePath', // automatically becomes /docs/with-basePath
        destination: '/another', // automatically becomes /docs/another
      },
      {
        // does not add /docs to /without-basePath since basePath: false is set
        // Note: this can not be used for internal rewrites e.g. `destination: '/another'`
        source: '/without-basePath',
        destination: 'https://example.com',
        basePath: false,
      },
      {
        // does not handle locales automatically since locale: false is set
        source: '/nl/with-locale-manual',
        destination: '/nl/another',
        locale: false,
      },
    ]
  },
}
```

重定向配置：

```ts
module.exports = {
  basePath: '/docs',
  i18n: {
    locales: ['en', 'fr', 'de'],
    defaultLocale: 'en',
  },

  async redirects() {
    return [
      {
        // this matches '/' since `en` is the defaultLocale
        source: '/en',
        destination: '/en/another',
        locale: false,
        permanent: false,
      },
      {
        source: '/post/:slug(\\d{1,})',
        destination: '/news/:slug', // Matched parameters can be used in the destination
        permanent: false,
      },
      {
        source: '/with-basePath', // automatically becomes /docs/with-basePath
        destination: '/another', // automatically becomes /docs/another
        permanent: false,
      },
      {
        // does not add /docs since basePath: false is set
        source: '/without-basePath',
        destination: '/another',
        basePath: false,
        permanent: false,
      },
    ]
  },
}
```



配置 Webpack：

```ts
// Example config for adding a loader that depends on babel-loader
// This source was taken from the @next/mdx plugin source:
// https://github.com/vercel/next.js/tree/canary/packages/next-mdx
module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mdx/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          options: pluginOptions.options,
        },
      ],
    })

    return config
  },
}
```

```ts
module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))

    // Important: return the modified config
    return config
  },
}
```

配置 React Strict Mode 

```ts
// next.config.js
module.exports = {
  reactStrictMode: true,
}
```



## 👉 Chrome-aws-lambda screenshot 截屏
- https://github.com/vercel/virtual-event-starter-kit

参考代码自来 Vercel 演示项目 virtual-event-starter-kit。

截屏组件编写：

```ts
import chrome from 'chrome-aws-lambda';
import puppeteer from 'puppeteer-core';

export default async function screenshot(url: string) {
  const options = process.env.AWS_REGION
    ? {
        args: chrome.args,
        executablePath: await chrome.executablePath,
        headless: chrome.headless
      }
    : {
        args: [],
        executablePath:
          process.platform === 'win32'
            ? 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
            : process.platform === 'linux'
            ? '/usr/bin/google-chrome'
            : '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
      };
  const browser = await puppeteer.launch(options);
  const page = await browser.newPage();
  await page.setViewport({ width: 2000, height: 1000 });
  await page.goto(url, { waitUntil: 'networkidle0' });
  return await page.screenshot({ type: 'png' });
}
```

使用截屏功能：

```ts
import { NextApiRequest, NextApiResponse } from 'next';
import screenshot from '@lib/screenshot';
import { SITE_URL, SAMPLE_TICKET_NUMBER } from '@lib/constants';
import redis from '@lib/redis';

export default async function ticketImages(req: NextApiRequest, res: NextApiResponse) {
  let url: string;
  const { username } = req.query || {};
  if (username) {
    if (redis) {
      const usernameString = username.toString();
      const [name, ticketNumber] = await redis.hmget(
        `user:${usernameString}`,
        'name',
        'ticketNumber'
      );
      if (!ticketNumber) {
        res.statusCode = 404;
        return res.end('Not Found');
      }
      url = `${SITE_URL}/ticket-image?username=${encodeURIComponent(
        usernameString
      )}&ticketNumber=${encodeURIComponent(ticketNumber)}`;
      if (name) {
        url = `${url}&name=${encodeURIComponent(name)}`;
      }
    } else {
      url = `${SITE_URL}/ticket-image?ticketNumber=${encodeURIComponent(SAMPLE_TICKET_NUMBER)}`;
    }
    const file = await screenshot(url);
    res.setHeader('Content-Type', `image/png`);
    res.setHeader(
      'Cache-Control',
      `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`
    );
    res.statusCode = 200;
    res.end(file);
  } else {
    res.status(404).send('Not Found');
  }
}
```


