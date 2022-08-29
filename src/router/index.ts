import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'

const routes:RouteRecordRaw[] = [{
  path: '/',
  component: () => import('@/views/Home.vue')
}, {
  path: '/about',
  component: () => import('@/views/About.vue')
}]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
