//你可以指定一个Mutation 在其中发起ajax 然后拿到了res之后就state.xx = res
//接下来在某个你需要的hook里commit一下这个mutation 去驱动他
//之后就可以在组件内部 this.$store.state.xx 获取到这个数据 很简单的 如果你需要异步的一些操作就需要actions

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
//初始化数据
const state = {
		 count: 0,
		 author2:'不了的直接mapState哈哈哈',
		 user_uuid:"",
		  user_name:"",
		  user_phone:'',
		  user_address:'',
		  user_pic:"",
		  login: false, //是否登录
		 author:"user store 张珊 cart2345",
	     newslist:[],
        newsdetail:{},
	 //商品列表
    shop_list: [{
        id: 11,
        name: '鱼香肉丝',
        price: 12,
      },  {
        id: 47,
        name: '米饭',
        price: 2
      }],
      
      

	
	
};

//getter 抛出去的数据
//getter 抛出去的数据
const getters = {
   user_uuid:state => state.user_uuid,
   user_name:state => state.user_name,
    author:state => state.author,
    user_phone:state => state.user_phone,
};

//mutation
const mutations = {
   
   setUserInfo(state,data){
   //	console.log("setUserInfo");
   //	console.log(data);
            state.user_name=data.nick||"神秘人士";
            state.user_phone=data.phone;
             state.user_pic=data.user_pic;
             state.user_uuid=data.user_uuid;
              state.user_address=data.user_address;
               state.login=true; //是否登录
               
                 console.log("state.user_uuid"+state.user_uuid);
        }
}


//action 异步的操作
const actions = {
  ajaxUserInfoActions(context,params){
  	var uerinfo='https://z.lrlz.com/p.py?uri=http://lrlzapp.wx.jaeapp.com/app/inter/getUserInfo.hh&uuid=60BVx69000&appkey=6581235709';
            // 进行请求,获取点赞后的agree字段属性值
           //	alert(11);
           //	console.log(Vue)
        Vue.http.get(uerinfo).then(function (res) {
                // 处理业务
               // console.log(res.data);
                // 调用上面setAgree方法更新点赞数
                context.commit("setUserInfo",res.data);
            },function(){})
        },
        
        ajaxUserInfoActions2 () {
  	//debugger;
  	alert(22);
  	//return false;
  	var thisApiUrl='https://z.lrlz.com/p.py?uri=http://lrlzapp.wx.jaeapp.com/app/inter/getUserInfo.hh&uuid=60BVx69000&appkey=6581235709';

	  //this.$http.get(thisApiUrl).then((response) => {
      Vue.$http.get(thisApiUrl).then(function (response) {

      	var data=response.data;
      	 	alert("$axios"+data.list[0].memo)

	 console.log("哈1index哈哈"+response.data.success);
    
       }).catch(function (error) {
     });	
    },
        
        
	
};


export default {
  state,
  mutations,
  actions,
  getters,
};