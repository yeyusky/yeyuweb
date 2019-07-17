import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.component'
import Select from '@/components/Select.component'
import Goods from '@/components/Goods.component'
import My from '@/components/My.component'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/select',
      name: 'Select',
      component: Select
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/my',
      name: 'My',
      component: My
    }
  ]
})
