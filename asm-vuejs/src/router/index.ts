import { createRouter, createWebHistory } from 'vue-router';

import Home from '../components/Home.vue';
import Login from '../components/Login.vue';
import Baiviet from '../components/Baiviet.vue';
import Video from '../components/Video.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/baiviet', component: Baiviet },
  { path: '/video', component: Video }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router