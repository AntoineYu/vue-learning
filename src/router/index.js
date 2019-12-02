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
    meta: {
      title: 'Acceuil'
    },
    beforeEnter: ((to, from, next) => {
      console.log('Accueil');
      next()
    }),
    children: [
      // {
      //   path: '',
      //   redirect: 'news'
      // },
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
    component: about,
    meta: {
      title: 'About'
    }
  },
  {
    path: '/user/:userId',
    component: user,
    meta: {
      title: 'User'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: 'Profile'
    }
  }
]


const router = new Router({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

//前置守卫guard
router.beforeEach((to, from, next) => {
  //从from跳到to
  //to即将要进入的路由对象  from即将要离开的路由对象
  //next必须写
  document.title = to.matched[0].meta.title
  //console.log(to)
  next()
})

//后置钩子hook
router.afterEach((to,from) => {
  //console.log('-----');
})

export default router
