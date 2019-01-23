import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'

Vue.config.productionTip = false


import './assets/css/base.css'  //公共资源
import './assets/css/style.css'

// import './assets/js/jquery-1.7'; //看自身的库是不是自己暴露的
// import Swiper from'./assets/js/swiper'; //不是全局暴露的（定义了Swiper这个变量就说明不是全局暴露），哪个组件用，哪个组件调用


new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
