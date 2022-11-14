import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Chatroom from '../views/Chatroom.vue'
import { projectAuth } from '../firebase/config'

// auth guard
const requiredAuth = (to, from, next) => {
  const user = projectAuth.currentUser
  if(!user){
    next({name: 'Welcome'})
  }
  next()
}

const requireNoAuth = (to, from, next) => {
  const user = projectAuth.currentUser
  if(user){
    next({name: 'Chatroom'})
  }
  next()
}

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    beforeEnter: requireNoAuth
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: Chatroom,
    beforeEnter: requiredAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router