import Vue from 'vue'
import Vuex from 'vuex'
import shopcart from "./modules/shopcart";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    shopcart
  }
})
