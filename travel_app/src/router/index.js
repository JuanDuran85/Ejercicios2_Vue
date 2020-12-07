import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/details/:id',
    name: 'DestinationDetails',
    component: () => import(/* webpackChunkName: "DestinationDetails" */ '../views/DestinationDetails.vue')
  },
  {
    path: '/brazil',
    name: 'Brazil',
    component: () => import(/* webpackChunkName: "Brazil" */ '../views/Brazil.vue')
  },
  {
    path: '/hawaii',
    name: 'Hawaii',
    component: () => import(/* webpackChunkName: "Hawaii" */ '../views/Hawaii.vue')
  },
  {
    path: '/panama',
    name: 'Panama',
    component: () => import(/* webpackChunkName: "Panama" */ '../views/Panama.vue')
  },
  {
    path: '/jamaica',
    name: 'Jamaica',
    component: () => import(/* webpackChunkName: "Jamaica" */ '../views/Jamaica.vue')
  },
]

const router = new VueRouter({
  linkExactActiveClass: "travel-active-class",
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
