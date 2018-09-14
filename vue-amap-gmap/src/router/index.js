import Vue from 'vue'
import Router from 'vue-router'
import GMap from '@/view/gmapDemo'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GMap',
      component: GMap
    }
  ]
})
