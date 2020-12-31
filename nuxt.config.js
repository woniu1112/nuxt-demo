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
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
