import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios';

import { Button, Swipe, SwipeItem, Search, CountDown, Image, Lazyload, Icon, Stepper, Field, Cell, CellGroup, Uploader, Dialog } from 'vant';
Vue.use(Swipe).use(SwipeItem).use(Search).use(Button).use(CountDown).use(Icon).use(Cell).use(CellGroup)
  .use(Image).use(Lazyload).use(Field).use(Uploader).use(Dialog).use(Stepper)

Vue.config.productionTip = false
Vue.prototype.$axios = Axios

import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

/* cookie 存到 store */

export function cookieToStore () {
  let userInfo = {
    user_id: VueCookies.get('uid'),
    avatar: VueCookies.get('avatar')
  }
  let sceneInfo = {
    admin_id: VueCookies.get('admin_id'),
    vote_id: VueCookies.get('vote_id')
  }
  console.log(userInfo, sceneInfo);
  store.commit('setUserInfo', userInfo)
  store.commit('setSceneInfo', sceneInfo)
}