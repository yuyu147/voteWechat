import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {
      user_id: 6657,
      avatar: '/uploads/20190816/764e1876006f46a40fc52184caf397a2.png'
    },
    sceneInfo: {
      admin_id: 2,
      vote_id: 3
    }
  },
  getters: {
    userInfo (state) {
      return state.userInfo
    },
    sceneInfo (state) {
      return state.sceneInfo
    }
  },
  mutations: {
    setUserInfo (state, data) {
      state.userInfo = data
    },
    setSceneInfo (state, data) {
      state.sceneInfo = data
    }
  },
  actions: {

  }
})
