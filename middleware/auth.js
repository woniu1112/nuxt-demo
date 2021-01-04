export default (context) => {
  let {store, route, redirect, params, query, req, res} = context
  // console.log(redirect)
  // redirect('/index')
  // 前置全局路由守卫业务
  // store 状态树信息
  // route 一条目标路由信息
  // redirect 强制跳转
  // params， query 校验参数合理性
  console.log('nuxt.config outside 全局路由守卫')
  // console.log(store.state)
}
