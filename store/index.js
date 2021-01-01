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
  nuxtServerInit(store, context) {
    console.log('nuxtserverinit')
  }
}

export const getters = {
  getNav(state) {
    return state.bnav ? '显示' : '隐藏'
  }
}
