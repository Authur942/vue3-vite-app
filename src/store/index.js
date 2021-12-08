import { createStore } from 'vuex'

export default createStore({
  state: {
    tagsList: []
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