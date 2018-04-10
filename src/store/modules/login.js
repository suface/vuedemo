//你可以指定一个Mutation 在其中发起ajax 然后拿到了res之后就state.xx = res
//接下来在某个你需要的hook里commit一下这个mutation 去驱动他
//之后就可以在组件内部 this.$store.state.xx 获取到这个数据 很简单的 如果你需要异步的一些操作就需要actions

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
//初始化数据
const state = {
		
		  user_uuid:"",
		  user_phone:'',
		  code:"",
		  login: false, //是否登录
		 author2:"login store作者",
	  
      

	
	
};

//getter 抛出去的数据
//getter 抛出去的数据
const getters = {
  
};

//mutation
const mutations = {
   
   setLoginInfo(state,data){
            state.code=data.code;
            state.user_phone=data.phone;
             state.login=true; //是否登录     
       },
       toNextPage(state,params){
      //console.log(params);
         let $router=params.$router;
         let redirect =params.redirect; //url 转码
          //  console.log($router);
           //  console.log(redirect); 
            $router.push({ path:redirect})  //http://blog.

              
        }
}


//action 异步的操作
const actions = {
  ajaxUserLoginActions(context,params){
  	var uerinfo='https://z.lrlz.com/p.py?uri=http://lrlzapp.wx.jaeapp.com/app/inter/getUserInfo.hh&uuid=60BVx69000&appkey=6581235709';
         console.log(params.login_phone+"”，"+params.login_code)
    
        Vue.http.get(uerinfo).then(function (res) {
                      localStorage.setItem("isLogin",true);
                    context.commit("setLoginInfo",res.data,);
                    context.commit("toNextPage",params);
                
            },function(){});
            
            
            
     },
        
       
        
	
};


export default {
	//namespaced: true, 
  state,
  mutations,
  actions,
  getters,
};