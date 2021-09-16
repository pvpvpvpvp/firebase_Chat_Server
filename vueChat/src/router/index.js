import Vue from 'vue'
import Router from 'vue-router'
import Chat from '@/components/Chat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/chat/:cname',
      name: 'chat',
      component: Chat    
    }
  ]
})
