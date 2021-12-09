import { createStore } from 'vuex'

export default createStore({
  state: {
    tagsList: [],
    collapse: false
  },
  mutations: {
    clearTags(state) {
      state.tagsList = []
    },
    delTagsItem(state, data) {
			state.tagsList.splice(data.index, 1)
		},
    setTagsItem(state, data) {
			state.tagsList.push(data)
		},
    // 侧边栏折叠
		handleCollapse(state, data) {
			state.collapse = data
		}
  },
  actions: {

  },
  modules: {
  }
})