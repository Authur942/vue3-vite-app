import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'

const routes = [
  {
    path: '/',
    redirect: '/HelloWorld'
  },
  {
    path: '/HelloWorld',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/Login',
    name: 'Login',
    meta: {
      title: '登录'
    },
    component: () => import ('../components/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${ to.meta.title } | vue3-vite-app`
  const role = localStorage.getItem('ms_username')
  if (!role && to.path !== '/Login') {
    next('/Login')
  } else if (to.meta.permission) {
    role === 'admin' ? next() : next('/403')
  } else {
    next()
  }
})

export default router