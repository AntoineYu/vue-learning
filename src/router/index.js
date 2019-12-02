import Vue from 'vue'
import Router from 'vue-router'
// import home from '../components/home'
// import about from '../components/about'

//懒加载
const home = () => import('../components/home')
const about = () => import('../components/about')
const HomeNews = () => import('../components/HomeNews')
const HomeMsgs = () => import('../components/HomeMsgs')
const user = () => import('../components/user')
const Profile = () => import('../components/Profile')

Vue.use(Router)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home,
    children: [
      {
        path: '',
        redirect: 'news'
      },
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'msgs',
        component: HomeMsgs
      }
    ]
  },
  {
    path: '/about',
    component: about
  },
  {
    path: '/user/:userId',
    component: user
  },
  {
    path: '/profile',
    component: Profile
  }
]


export default new Router({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})
