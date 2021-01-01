export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'myssr',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css) 全局样式
  css: [
    '@/assets/css/main.css'
  ],

  router: {
    middleware: 'auth',
    extendRoutes(routes, resolve) { // 扩展路由
      routes.push({
        name: 'home',
        path: '/index',
        component: resolve(__dirname, 'pages/goods/index.vue')
      })
    }
  },
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/router.js',
    {
      src: '~/plugins/axios.js',
      ssr: true // 允许次插件在服务端也运行
    }
  ],
 // 开启代理需要配置  axios 开启跨域， proxy
  axios: {
    proxy: true // 开启axios跨域
    // prefix: '/api' // baseurl
  },
  proxy: {
    '/api/': {
      target: 'http://localhost:3001', // 代理转发的地址
      changeOrigin: true,
      pathRewrite: {
        // '^/api': ''
      }
    }
  },

  // 定义系统默认loading效果，或者指定一loading组件
  // loading: {color: 'red', height: '3px'},
  loading: '~/components/loading.vue',

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios' // 只需添加axios就可以了，无需添加proxy
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
