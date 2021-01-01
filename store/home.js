export const state = () => {
    return {
        err: 1,
        data: {}
    }
}

export const mutations = {
    M_UPDATE_HOME (state, payload) {
        state.err = payload.err
        state.data = payload.data
    }
}

export const actions = {
    aUpadateHome({commit, satte}, payload) {
        // 异步处理
        commit('M_UPDATE_HOME', payload)
    }
}