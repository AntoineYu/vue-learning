import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home'
import about from '../components/about'

Vue.use(Router)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/about',
    component: about
  }
]


export default new Router({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})
