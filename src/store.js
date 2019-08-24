import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {
      user_id: '',
      avatar: ''
    },
    sceneInfo: {
      admin_id: '',
      vote_id: ''
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
