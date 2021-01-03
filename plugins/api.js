import apis from '~/assets/api/index'

const defaultOPtions = {
    url: '',
    data: {},
    type: 'GET',
    responseType: 'json',
    isformSubmit: false,
    config: {}
}
function getData (axios, options) {
    let {url, data, type, responseType, isformSubmit, config} = {...defaultOPtions, ...options}
    type = type.toUpperCase()
    if (type === 'GET') {
      let dataStr = ''
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
        url = url + '?' + encodeURI(dataStr) + '&t=' + new Date().getTime()
      }
    }
    if (url.indexOf('?') < 0) {
      url = encodeURI(url) + '?t=' + new Date().getTime()
    }
    // form表单形式提交
    if (isformSubmit) {
      let formData = new FormData()
      Object.keys(data).forEach(key => {
        formData.append(key, data[key])
      })
      data = formData
    }
    // console.log(url)
    return axios({
      method: type,
      baseURL: process.env.BASE_URL,
      url: url,
      data: data,
      responseType: responseType,
      ...config // 其他配置
    })
  }
  

export default ({$axios}, inject) => {
    let obj = {}
    console.log(process.env.NODE_ENV)
    for(let i in apis) {
        obj[i] = apis[i]($axios, getData)
    }
    // inject: 注入到服务端 context ， vue实例， vuex中，$api
    inject('api', obj)
}
