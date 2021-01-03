# myssr

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

nuxt 生命周期：

  nuxtServerInit 
    * 接收两个参数，第一个 vuex 上下文 store, 第二个就是 nuxt.js 上下文 context
    * 只能够在 store/index.js actions 中设置
  middleware
    * 参数为 nuxt.js 上下文 context
    * 全局中间件 （Global middleware）
    * 布局中间件 （layout middleware)
    * 路由中间件 （Route middleware）
  validate
    * 参数为 nuxt.js 上下文 context
    * 可以进行参数的有效性校验
    * return true 或 false ，当返回为false 时 跳转 404页面
  asyncData
    * 参数为 nuxt.js 上下文 context
    * 异步数据处理
    * return {} 看可以在 pages 实例 data 中添加属性
  fetch
    * 参数为 nuxt.js 上下文 context
    * 处理异步数据
    * set vuex 状态
  render
    * 开始客户端渲染
  beforeCreated && created
    * 即跑在 服务端也跑在客户端
  其余的和Vue相同


路由：
  约定式路由
 
error 404页面: 
  约定式 在 layout 目录下添加一个 error.vue  文件， props：['error']  错误信息

路由守卫：
  前置  依赖中间件middleware， 插件 
    全局守卫： nuxt.config  指向middleware
              layouts 定义中间件
    组件独享守卫：
              middleware
    插件全局后置守卫

  后置：
    使用Vue 的beforeRouteLeave钩子 , 在Vue组件内部
    插件全局后置守卫

数据交互：
  安装：
    @nuxtjs/axios    @nuxtjs/proxy
    数据请求拦截器 在plugin中设置

loading 配置： 
  ```
  // nuxt.config.js
  // loading: {color: 'red', height: '3px'},
  loading: '~/components/loading.vue',
  ```

vuex:
  模块方式： ‘store’ 目录下的每个‘.js’ 文件会被转换成为状态树（当然， 'index' 是根模块）
  classic(不建议使用)： 'store/index.js' 返回创建的vuex.store 实例方法

状态持久化 && token 校验：
  思想： 登录时，同步vuex && cookie， 强制刷新后， nuxtserverinit 钩子 取出cookies，同步vuex， axios拦截器读取vuex
  cookie-universal-nuxt  利用这个包做状态持久化，引入模块在 nuxt.config.js modules 中配置

element-ui 模块
  在 plugin 组件中创建 elementui.js ,然后在 nuxt.config.js 中 plugin 中引入，并且配置 css 引入elementui index.css

vue 全局方法、全局过滤器、全局指令等 可在 plugin 中创建一个js文件，详见 plugin 目录

head seo 的配置，对于有共同的 配置的 我们可以 在 vue.mixin 混入中加入一个 $seo 方法，把公用的放在里面不同的可以当做参数传入

sass 的使用
  * 安装两个依赖 node-sass sass-loader，安装好后无需配置直接可以使用
  * 定义全局使用的 scss 变量 ，需要在引入一个模块 @nuxtjs/style-resources, 然后在 nuxt.config.js module 中配置，并在 styeResources 中配置 引入 scss 资源

定义化 HTML 模板
  由于 在 nuxt.config.js 已经定义了 html 一个内容，我们直接在 根目录下 创建一个 app.html 模板即可，里面用 nuxt 定义好的一些变量，也可以加入 自己一些个性化的内容

资源指向与引入
  * 内容部资源引入： 需要压缩的放到 assets 中 ，不需要压缩的 引入 static 文件中的即可。
  * 当嵌套层级较深时可以引入别名 ~ 代表根目录的别名
  * 外部资源 可以直接在 nuxt.config.js head中设置 ，或直接在 app.html 模板中设置，当只是在一个页面中使用时，可以在使用的组件中 head中设置