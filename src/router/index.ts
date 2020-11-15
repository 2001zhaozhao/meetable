import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: 'my-vibe'
      },
      {
        path: 'challenge',
        component: () => import('@/views/TabChallenge.vue')
      },
      {
        path: 'make-friends',
        component: () => import('@/views/TabMakeFriends.vue')
      },
      {
        path: 'messages',
        component: () => import('@/views/TabMessages.vue')
      },
      {
        path: 'my-vibe',
        component: () => import('@/views/TabMyVibe.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
