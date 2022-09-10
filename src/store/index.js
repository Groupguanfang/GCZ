import { createStore } from 'vuex'

export default createStore({
  state: {
    menuCollapsed: false
  },
  getters: {
  },
  mutations: {
    collapsedAction(state) {
      state.menuCollapsed = !state.menuCollapsed
    }
  },
  actions: {
  },
  modules: {
  }
})
