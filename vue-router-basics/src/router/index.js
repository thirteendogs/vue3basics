import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import About from '../views/About.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobDetail from '../views/jobs/JobDetail.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // lazy loading data
    component: () => import('../views/About.vue')
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: Jobs
  },
  {
    path: '/jobs/:id',
    name: 'jobDetail',
    component: JobDetail,
    props: true
  },
  {
    path: '/old-jobs',
    redirect: '/jobs'
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
