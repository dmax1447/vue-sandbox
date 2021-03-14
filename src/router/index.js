import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import('../views/Users.vue'),
  },
  {
    path: '/pirojki',
    name: 'Pirojki',
    component: () => import('../views/Pirojki.vue'),
  },
  {
    path: '/render',
    name: 'render',
    component: () => import('../views/Render.vue'),
  },
  {
    path: '/slots',
    name: 'slots',
    component: () => import('../views/Slots.vue'),
  },
  {
    path: '/rest',
    name: 'rest',
    component: () => import('../views/Rest.vue'),
  },
  {
    path: '/vuetify',
    name: 'vuetify',
    component: () => import('../views/Vuetify.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
