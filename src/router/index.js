import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '../views/index/index'
import Manage from '../views/manage/index'

import Login from '../views/login/login.vue'
import Main from '../views/main/main.vue'
import Home from '../views/home/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path:'/manage',
      name:'Manage',
      component:Manage
    },
    {
      path:'/main',
      name:'Main',
      component:Main
    },
    {
      path:'/home',
      name:'Home',
      component:Home
    }
  ]
})
