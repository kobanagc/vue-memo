import { createStore } from 'vuex'

export default createStore({
  state: {
    memos: []
  },
  getters: {
  },
  mutations: {
    // メモを保存
    save (state, newMemo) {
      state.memos.unshift(newMemo)
    }
  },
  actions: {
  },
  modules: {
  }
})
