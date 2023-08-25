import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '',
    name: 'home',
    component: HomeView
  },
  {
    path: '/calendar',
    name: 'calendar',
    // route level code-splitting
    // this generates a separate chunk (Calendar.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // https://router.vuejs.org/guide/advanced/lazy-loading.html#Grouping-Components-in-the-Same-Chunk
    component: () => import('../views/CalendarView.vue')
  },
  {
    path: '/markdown',
    name: 'markdown',
    component: () => import('../views/MarkdownView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
