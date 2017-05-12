import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import User from '@/components/User'
import Cucu from '@/components/Cucu'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      component: Hello
    },
    {
      path: '/user',
      component: User,
      children: [{
        path: 'cucu',
        component: Cucu
      }]
    }
  ]
})