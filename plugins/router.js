export default (context) => {
    let {app, redirect, params, query, store} = context
    // console.dir(vue 实例app)
    // redirect跳转函数
    app.router.beforeEach((to,from,next) => {
        // 全局前置路由守卫 ， 插件
        // 可以使用 next(true)/next(false)  ，但是不能使用 next('/index') 进行跳转， 用redirect进行跳转
        console.log('插件配置 全局前置路由守卫')
        // if (to.name === 'goods' || to.name === 'goods-id') {
        //     redirect({name: 'index'})
        // } else {
        //     next(true)
        // }
        next()
    })
    app.router.afterEach((to,from) => {
        console.log('插件配置，全局后置路由守卫')
    })
}