export default (context) => {
    let {$axios, redirect, route, store} = context
    // 基本配置

    $axios.defaults.timeout = 10000;

    // 请求拦截
    $axios.onRequest(config => {
        console.log('请求拦截')
        config.headers.token = 'myssrtoken'
        return config
    })

    // 响应拦截
    $axios.onResponse(res => {
        console.log('响应拦截')
        if (res.data.code === '4') {
            redirect('/login?path=' + route.fullPath)
        }
        return res
    })
    // 错误处理
    $axios.onError(error => {
        // 处理
        return error
    })
}