// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';



import App from './App'
import router from './router'
import './style/public.css'   ;//全局公共样式

//import Vuex from 'vuex';
//Vue.use(Vuex);

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


//import Dialog from 'element-ui';   // element-ui 组件
//Vue.use(Dialog);

import VueResource from 'vue-resource';  
Vue.use(VueResource)  

//import VueAwesomeSwiper from 'vue-awesome-swiper'; //这里是全局化 swiper 组件 
//Vue.use(VueAwesomeSwiper);

import axios from 'axios';// ajax 请求
Vue.prototype.$axios = axios;

//友赞 Aant
//https://www.youzanyun.com/zanui/vant/#/zh-CN/quickstart
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';

Vue.use(Vant);

//import localStorage from 'store';  
//Vue.use(localStorage) ;

//import $ from 'jquery';
//Vue.use($)  

/*图片懒加载*/
//import VueLazyload from 'vue-lazyload'
//Vue.use(VueLazyload, {
//  preLoad: 1.3,
//  loading: require('@/assets/head.jpg'),
//  attempt: 1
//})

/*滑动事件*/
//import VueTouch from 'vue-touch'
//Vue.use(VueTouch, {name: 'v-touch'});

Vue.config.productionTip = false





/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
render: h => h(App) ,   //vue2.0的写法

 // components: { App },
  template: '<App/>'
})
