      

//一般单独js文件写数据
 
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);


	// //存放组件之间共享的数据
const state={
     message:'Hello World store',
		 user_name:"",
		 author:"作者张珊result",
};


//// 创建改变状态的方法  必须是同步函数
////改Vuex的store中的状态state的唯一方法就是提交mutations。 
///用mutations来操作state，但是需要用store.commit来主动式的操作mutations。
				
const mutations={
       showUserName(state){
            alert(state.user_name);
        }
		
}


const getters = {
       
    }


 
export default new Vuex.Store({
	 state,mutations,getters
//			state: state,
//			mutations: mutations,
//			actions: actions,



})



