import Vue from 'vue'
import VueRouter from 'vue-router'
import EventList from '../views/EventList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList,
    props: route => ({ page: parseInt(route.query.page) || 1})
  },
  {
    path: '/event/:id',
    name: 'EventShow',
    component: () => import(/* webpackChunkName: "EventShow" */ '../views/EventShow.vue'),
    props: true
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
