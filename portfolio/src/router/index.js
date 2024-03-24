import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '@/views/AboutView.vue'
import CvView from '@/views/CvView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/cv',
    name: 'CV',
    component: CvView
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectsView
  }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router