// 主模块

// state  必须是一个函数
export const state = () => {
  return {
    bnav: false,
    bloading: false
  }
}

export const mutations = {
  M_UPDATE_NAV (state, payload) {
    state.bnav = payload
  },
  M_UPDATE_LOADING (state, payload) {
    state.bloading = payload
  }
}

export const actions = {
  // nuxtServerInit 初始化生命周期
  nuxtServerInit(store, context) {
    let {app: {$cookies}} = context
    // 初始化东西到 store 中
    let user = $cookies.get('user') ? $cookies.get('user') : {err: 2,msg: '未登录',token: ''}
    store.commit('user/M_UPDATE', user)
    console.log('nuxtserverinit')
  }
}

export const getters = {
  getNav(state) {
    return state.bnav ? '显示' : '隐藏'
  }
}
