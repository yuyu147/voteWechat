import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home/home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/rule',
      name: 'rule',
      component: () => import('@/views/Rule/rule')
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('@/views/Detail/detail')
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: () => import('@/views/Ranking/ranking')
    },
    {
      path: '/apply',
      name: 'apply',
      component: () => import('@/views/Apply/apply')
    }
  ]
})
