import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '@/views/HomePage.vue'

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
    component: () => import('@/views/Segments.vue'),
  },
  {
    path: '/Toolbars',
    name: 'Toolbars',
    component: () => import('@/views/Toolbars.vue'),
  },
  {
    path: '/Menus',
    name: 'Menus',
    component: () => import('@/views/Menus.vue'),
  },
  {
    path: '/AvatarMenu',
    name: 'AvatarMenu',
    component: () => import('@/components/menus/AvatarMenu.vue'),
  },
  {
    path: '/LogoMenu',
    name: 'LogoMenu',
    component: () => import('@/components/menus/LogoMenu.vue'),
  },
  {
    path: '/Modals',
    name: 'Modals',
    component: () => import('@/views/Modals.vue'),
  },
  {
    path: '/Lists',
    name: 'Lists',
    component: () => import('@/views/Lists.vue'),
  },
  {
    path: '/Inputs',
    name: 'Inputs',
    component: () => import('@/views/Inputs.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
