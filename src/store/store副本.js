      

//一般单独js文件写数据
 
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

console.log(Vuex) //Vuex为一个对象里面包含
//Vuex ={
//  Store:function Store(){},    
//  mapActions:function(){},    // 对应Actions的结果集
//  mapGetters:function(){},    //对应Getters的结果集
//  mapMutations:function(){},  //对应Mutations的结果集
//  mapState:function(){},      //对应State的结果集
//  install:function install(){}, //暂时不做讲解 
//  installed:true //暂时不做讲解
//}

	// //存放组件之间共享的数据
const state={
     message:'Hello World store',
		a: 1,
	　b: '33',
		 count: 0,
		 author:"作者张珊"
};


//// 创建改变状态的方法  必须是同步函数
////改Vuex的store中的状态state的唯一方法就是提交mutations。 
///用mutations来操作state，但是需要用store.commit来主动式的操作mutations。
				
const mutations={
  newAuthor(state,msg){
		state.author=msg;
						
		},
	add(state,n){
            state.count+=n;
        },

    reduce(state,n){
            state.count-=n;
    },
    
    
}


//定义getters 不推荐使用箭头函数
const getters = {
  count:function(state){
      return state.count +=100
  }
};



  //创建驱动actions可以使得mutations得以启动
 // Actions 提交的是mutations，而不是直接变更状态。
  //Actions 可以包含任意异步操作。　
 //actions —— mutations —— state 的过程

const actions={
	 addAction(context,n) {
	 	 setTimeout(() => { context.commit('add',n) }, 2000);
        console.log('我提前执行了');
       // context.commit('add');
    },
    reduceAction(context,n) {
        context.commit('reduce',n);
    }
	
}

 //http://blog.csdn.net/qq_35534823/article/details/71190435
 
 
export default new Vuex.Store({
	 state,
	 mutations,
	 getters,
	 actions   
})



