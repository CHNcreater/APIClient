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
      },
      children: [
        {
          path: 'apiclient',
          component: () => import('../views/ApiTestView.vue')
        },
        {
          path: 'other',
          component: () => import('../views/OtherView.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    }
  ]
})

export default router
