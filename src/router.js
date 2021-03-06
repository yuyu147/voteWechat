import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home/home'
import { cookieToStore } from "@/main";

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      redirect: '/',
      name: 'home-two',
      component: Home
    },
    {
      path: '/rule',
      name: 'rule',
      component: () => import('@/views/Rule/rule')
    },
    {
      path: '/detail/:id',
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

router.beforeEach((to, from, next) => {
  cookieToStore()
  next()
})

export default router