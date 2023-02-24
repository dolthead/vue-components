import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'

// 'Segments', 'Toolbars', 'Widgets', 'Slides', 'Cards', 'Menus', 'Screens', 'Modals', 'Lists', 'Tabs', 'Inputs',
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/Segments',
    name: 'Segments',
    component: () => import('../views/Segments.vue'),
  },
  {
    path: '/Toolbars',
    name: 'Toolbars',
    component: () => import('../views/Toolbars.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
