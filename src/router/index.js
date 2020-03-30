import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import TrainingList from '@/views/TrainingList.vue'
import Training from '@/views/Training.vue'
import Contacts from '@/views/Contacts.vue'
import Cases from '@/views/CasesList.vue'
import Case from '@/views/Case.vue'
import Club from '@/views/Club.vue'
import ArticleList from '@/views/ArticleList.vue'
import Article from '@/views/Article.vue'
import Search from '@/views/Search.vue'
import TraningListTags from '@/views/TraningListTags.vue'
import Auth from '@/views/Auth.vue'

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
  },
  {
    path: '/case/:id',
    name: 'case',
    component: Case
  },
  {
    path: '/club',
    name: 'club',
    component: Club
  },
  {
    path: '/article/',
    name: 'article',
    component: ArticleList
  },
  {
    path: '/article-detail/:id',
    name: 'article-detail',
    component: Article
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  },
  {
    path: '/traningTag/:id',
    name: 'traningTag',
    component: TraningListTags
  },
  {
    path: '/auth/:id',
    name: 'auth',
    component: Auth
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
