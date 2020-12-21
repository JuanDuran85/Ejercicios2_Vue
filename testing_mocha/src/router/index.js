import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/recordatorios',
    name: 'Recordatorios',
    component: () => import(/* webpackChunkName: "Recordatorios" */ '../views/Recordatorios.vue')
  },
  {
    path: '/cupones',
    name: 'Cupones',
    component: () => import(/* webpackChunkName: "Cupones" */ '../views/Cupones.vue')
  },
  {
    path: '/preguntas',
    name: 'Preguntas',
    component: () => import(/* webpackChunkName: "Preguntas" */ '../views/Preguntas.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
