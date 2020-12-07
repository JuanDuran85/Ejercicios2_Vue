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
    path: '/details/:slug',
    name: 'DestinationDetails',
    component: () => import(/* webpackChunkName: "DestinationDetails" */ '../views/DestinationDetails.vue'),
    props: true,
    children: [
      {
        path: ':',
        name: 'ExperiencesDetails',
        props: true,
        component: () => import(/* webpackChunkName: "ExperienceSlug" */ '../views/ExperiencesDetails.vue')
      }
    ]
  },
]

const router = new VueRouter({
  linkExactActiveClass: "travel-active-class",
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
