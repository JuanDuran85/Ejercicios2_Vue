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
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue'),
  },
  {
    path: '/admin',
    name: 'AdminUser',
    component: () => import(/* webpackChunkName: "User" */ '../views/AdminUser.vue'),
    meta: {
      requiredAuth: true,
    }
  },
  {
    path: '/invoices',
    name: 'Invoices',
    component: () => import(/* webpackChunkName: "User" */ '../views/Invoices.vue'),
    meta: {
      requiredAuth: true,
    }
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
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      const position = {};
      if (to.hash){
        position.selector = to.hash;
        if (to.hash === '#experience') {
          position.offset = {
            y: 100
          }
        }
        if (document.querySelector(to.hash)) {
          return position;
        }
        return false;
      }
    }
  },
  routes
});

router.beforeEach((to, from, next) => {
  let requiredAuth = to.matched.some(route => route.meta.requiredAuth);
  if (requiredAuth) {
    if (!db.userName && !db.password) {
      next({
        name: 'Login',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
