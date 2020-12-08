import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import db from '@/db/db';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/destination/:slug',
    name: 'DestinationDetails',
    component: () => import(/* webpackChunkName: "DestinationDetails" */ '../views/DestinationDetails.vue'),
    props: true,
    children: [
      {
        path: ':experienceSlug',
        name: 'ExperiencesDetails',
        props: true,
        component: () => import(/* webpackChunkName: "ExperienceSlug" */ '../views/ExperiencesDetails.vue')
      }
    ],
    beforeEnter: (to, from, next) => {
      let exists = db.destinations.find(result => result.slug == to.params.slug);
      if (exists) {
        next();
      } else {
        next({name: "NotFound"});
      }
    }
  },
  {
    path: '/404',
    alias: '*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "NotFound" */ '../views/NotFound.vue')
  },
]

const router = new VueRouter({
  linkExactActiveClass: "travel-active-class",
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
