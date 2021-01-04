export const state = () => {
    return {
        err: 1,
        token: '',
        msg: ''
    }
}

export const mutations = {
    M_UPDATE (state, payload) {
        state.err = payload.err
        state.token = payload.token
    }
}

export const actions = {
    aUpdate ({commit}, payload) {
        commit('M_UPDATE', payload)
    }
}

