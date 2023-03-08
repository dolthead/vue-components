import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '@/views/HomePage.vue'
// import TabsPageVue from '@/components/screens/FinTechScreen/TabsPage.vue';

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
  {
    path: '/Tabs',
    name: 'Tabs',
    component: () => import('@/views/Tabs.vue'),
  },
  {
    path: '/Screens',
    name: 'Screens',
    component: () => import('@/views/Screens.vue'),
  },
  {
    path: '/FinTechScreen',
    component: () => import('@/components/screens/FinTechScreen/TabsPage.vue'),
    children: [
      {
        path: '',
        redirect: '/FinTechScreen/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/components/screens/FinTechScreen/Tab1Page.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/components/screens/FinTechScreen/Tab1Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/components/screens/FinTechScreen/Tab1Page.vue')
      },
      {
        path: 'tab4',
        component: () => import('@/components/screens/FinTechScreen/Tab1Page.vue')
      }
    ]
  },
  {
    path: '/FeedsProfileScreens',
    component: () => import('@/components/screens/ProfileScreen/TabsPage.vue'),
    children: [
      {
        path: '',
        redirect: '/FeedsProfileScreens/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/components/screens/ProfileScreen/Tab1Page.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/components/screens/ProfileScreen/Tab2Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/components/screens/ProfileScreen/Tab3Page.vue')
      },
      {
        path: 'tab4',
        component: () => import('@/components/screens/ProfileScreen/Tab4Page.vue')
      }
    ]
  },
  {
    path: '/HomeScreen',
    component: () => import('@/components/screens/HomeScreen/TabsPage.vue'),
    children: [
      {
        path: '',
        redirect: '/HomeScreen/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/components/screens/HomeScreen/Tab1Page.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/components/screens/HomeScreen/Tab1Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/components/screens/HomeScreen/Tab1Page.vue')
      },
      {
        path: 'tab4',
        component: () => import('@/components/screens/HomeScreen/Tab1Page.vue')
      }
    ]
  },
  {
    path: '/TravelScreen',
    name: 'TravelScreen',
    component: () => import('@/components/screens/TravelScreen.vue'),
  },
  {
    path: '/Slides',
    name: 'Slides',
    component: () => import('@/views/Slides.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
