import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import TrainingList from '@/views/TrainingList.vue'
import Training from '@/views/Training.vue'
import Contacts from '@/views/Contacts.vue'
import Cases from '@/views/Cases.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/study',
    name: 'study',
    component: () => import(/* webpackChunkName: "study" */ '../views/Study.vue')
  },
  {
    path: '/consulting',
    name: 'consulting',
    component: () => import(/* webpackChunkName: "consulting" */ '../views/Consulting.vue')
  },
  {
    path: '/team',
    name: 'team',
    component: () => import(/* webpackChunkName: "consulting" */ '../views/Team.vue')
  },
  {
    path: '/training',
    name: 'training-list',
    component: TrainingList
  },
  {
    path: '/training/:id',
    name: 'training',
    component: Training
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: Contacts
  },
  {
    path: '/cases',
    name: 'cases',
    component: Cases
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
