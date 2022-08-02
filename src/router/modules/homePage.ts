import type { RouteRecordRaw } from 'vue-router'
import HomePage from '@/views/HomePage.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  }
]

export default routes