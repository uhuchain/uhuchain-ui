import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/components/Start'
import Status from '@/components/Status'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start
    },
    {
      path: '/status',
      name: 'Status',
      component: Status
    }
  ]
})
