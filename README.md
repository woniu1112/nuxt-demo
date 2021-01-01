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

路由：
  约定式路由
 
error: 
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