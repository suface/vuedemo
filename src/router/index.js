import Vue from 'vue'
import Router from 'vue-router'


import index from '@/pages/index'
import detail from '@/pages/detail'
import result from '@/pages/result'
import result1 from '@/pages/result1'
import result2 from '@/pages/result2'
import cart from '@/pages/cart'
import user from '@/pages/user'
import login from '@/pages/login'
import yzcar from '@/pages/yzcar'
import yzdetail from '@/pages/yzdetail'


Vue.use(Router)
//vue滑块
//import VueAwesomeSwiper from 'vue-awesome-swiper'
//Vue.use(VueAwesomeSwiper)

const router=new Router({

  routes: [
    {
      path: '/index',
      name: 'index',
 
      component: index,
//    meta: {
//    //keepAlive: true // 需要被缓存
//  }
    },
     {
      path: '*',
      redirect: '/index'
    },
    
     {
      path: '/detail',
      name: 'detail',
      component: detail
    },
     {
      path: '/yzcar',
      name: 'yzcar',
      component: yzcar,
        meta: {
      title: '有赞购物车'
       }
    },
     {
      path: '/yzdetail',
      name: 'yzdetail',
      component: yzdetail,
       meta: {
      title: '有赞详细页'
       }
    },
    {
      path: '/user',
      name: 'user',
      component: user,
       meta:{// 
        login:true  //需要登录的页面
      }
    },
     {
      path: '/login',
      name: 'login',
      component: login
    },
     {
      path: '/cart',
      name: 'cart',
      component: cart,
       meta:{// 
        login:true  //需要登录的页面
      }
    },
      {
      path: '/result',
      name: 'result',
      component: result,
      children: [
        {
          path: '/result/result1',
          component: result1
        },
        {
          path: '/result/result2',
          component: result2
        },
       
      ]
    },
     
  ]
});

export default router;

router.beforeEach((to, from, next) => {
// console.info(22, window.location.href)
//console.info(to,from,next)
// 对路由变化作出响应...
// console.log(router,to)
// console.log(router,to.query, from)
// console.log(to,$.param( to.query ),window.location.href)
let isLogin=localStorage.getItem('isLogin');
//console.log(isLogin+"开始isLogin")
const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
//全局拦截器的
if (to.meta.login) {  // 判断该路由是否需要登录权限
    if (isLogin) {  // 通过store获取当前的token是否存在
      next();
    } else {
    	  //alert("未登录，请先登录");
        next({
          path: '/login',
          query: { redirect: to.fullPath }  // 将跳转的路由path作为参数，登录成功后跳转到该路由
        })

    }
}else {
    next();  // 确保一定要调用 next()
}
});

//var redirect = encodeURIComponent(transition.to.path);
//   transition.redirect('/login?redirect=' + redirect);