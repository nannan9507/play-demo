export const state = () => ({
  data: {},
})

export const mutations = {
  setUser (state, data) {
    state.data = data || {}
  }
}

export const getters = {
  getUserInfo (state) {
    return state.data
  }
}