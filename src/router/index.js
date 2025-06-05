import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/students', component: () => import('@/views/Students.vue') },
  { path: '/teachers', component: () => import('@/views/Teachers.vue') },
  { path: '/courses', component: () => import('@/views/Courses.vue') },
  { path: '/about', component: () => import('@/views/AboutUs.vue') },
  { path: '/', redirect: '/students' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router