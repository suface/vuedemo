


// 组装模块并导出 store 的地方
import Vue from 'vue';
import Vuex from 'vuex';

import cart from './modules/cart.js'; //购物车
import user from './modules/user.js'; //购物车
import login from './modules/login.js'; //购物车

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {  //和文件名字对应
    cart,
    user,
    login
  },
  
  // this.$store.state.users.user_name = this.username;
  strict: process.env.NODE_ENV !== 'production', // 严格模式
});