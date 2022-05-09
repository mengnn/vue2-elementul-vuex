import Vue from "vue";
import Router from "vue-router"
import Login from "@/components/Login/index"
import Register from "@/components/Register/index"
import Home from "@/components/Main.vue"

Vue.use(Router)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
    // component: () => import('@/components/Login/index')
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children:[
      {
        path: '/list',
        name: 'list',
        component: () => import('@/components/List/index')
      },
      {
        path: '/question',
        name: 'question',
        component: () => import('@/components/Question/index')
      },
      {
        path: '/edit',
        name: 'edit',
        component: () => import('@/components/Edit/index')
      },
    ]
  }
]

export default new Router({
    routes
})
