import Vue from 'vue'
import Router from 'vue-router'
import Home from "../pages/home/Home";
import GoodsDetail from "../pages/GoodsDetail/GoodsDetail";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'Home',
      component:Home
    },
    {
      path: '/GoodsDetail',
      name:'/GoodsDetail',
      component:GoodsDetail
    }
  ]
})
