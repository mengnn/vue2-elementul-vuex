import Vue from 'vue'
import ElementUI from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from "./router"
import App from './App.vue'

import store from './store/index.js'

Vue.use(ElementUI)
Vue.use(VueAxios,axios)



// 设置导航守卫
router.beforeEach((to,from,next) => {
  // 获取token
  store.commit('getToken')
  const token = store.state.user.token
  // console.log(token)
 if(!token && to.name !== 'login') {
    
    if(to.name == "register") {
      next({name:'register'})
    }else {
      next({name:'login'})
    }
  } else {
    next()
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
