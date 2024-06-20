import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { HttpService } from '../services/http.service'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: '',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      //router guard
      beforeEnter: (to, from, next) => {
        console.log('Before entering HomeView')
        new HttpService().checkToken().then((isAuthenticated) => {
          if (!isAuthenticated) next('/login')
          else next()
        })
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/apiclient',
      name: 'apiclient',
      component: () => import('../views/ApiTestView.vue')
    }
  ]
})

export default router
