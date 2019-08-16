import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios';

import { Button, Swipe, SwipeItem, Search, CountDown, Image, Lazyload, Icon, Field, Cell, CellGroup, Uploader, Dialog } from 'vant';
Vue.use(Swipe).use(SwipeItem).use(Search).use(Button).use(CountDown).use(Icon).use(Cell).use(CellGroup)
  .use(Image).use(Lazyload).use(Field).use(Uploader).use(Dialog)

Vue.config.productionTip = false
Vue.prototype.$axios = Axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
