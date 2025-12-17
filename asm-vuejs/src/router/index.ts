import { createRouter, createWebHistory } from 'vue-router';

import Home from '../components/Home.vue';
import Login from '../components/Login.vue';
import Baiviet from '../components/Baiviet.vue';
import Video from '../components/Video.vue';
import Info from '../components/Info.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/info', component: Info },
  { path: '/login', component: Login },
  { path: '/video', component: Video },
  { path: '/baiviet', component: Baiviet },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router