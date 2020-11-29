import Vue from 'vue'
import VueRouter from 'vue-router'
import EventList from '../views/EventList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList
  },
  {
    path: '/event',
    name: 'EventShow',
    component: () => import(/* webpackChunkName: "EventShow" */ '../views/EventShow.vue')
  },
  {
    path: '/event/create',
    name: 'EventCreate',
    component: () => import(/* webpackChunkName: "EventCreate" */ '../views/EventCreate.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
