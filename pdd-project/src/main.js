// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './mui/css/mui.min.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import './assets/style/iconfont/iconfont.css'
//引入vuex模块store
import store from './store'
//引入toast插件
import Toast from "./layer/Toast";
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
Vue.prototype.$toast=Toast
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
