import { createStore } from 'vuex'

export default createStore({
  state: {
    tagsList: [],
    collapse: false
  },
  mutations: {
    clearTags(state) {
      state.tagsList = []
    }
  },
  actions: {

  },
  modules: {
  }
})