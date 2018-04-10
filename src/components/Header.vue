<template>
  <div class="header" >
      
        <ul class="header-nav">
          	<li v-for="(nav,index) in navs" :key='index' 
          		
          		:class="{active:index == num}"
          		  @click="setPaht(nav,index)" >{{nav.text}}
<!--<router-link :to='setPaht(nav.path)'><span>{{nav.text}}</span></router-link>	
-->
          	</li>
          	
  
        </ul>
  
  </div>
</template>

<script>

//var bus = new Vue();
//// 触发组件 A 中的事件
//bus.$emit('event1')
//// 在组件 B 创建的钩子中监听事件
//bus.$on('event1', function () {
//// ...
//})

import eventVue from '@/bus/eventBus.js';

export default {
  name: 'HelloWorld',
    props:['toson'],
  data () {
    return {
    	    isActive: true,
    	    num:0,
		navs:[
		    	{
		        text: '首页',
		        path: '/index',
		        parms:{
		        	sa:0
		        }
		      }, {
		        text: '详细页',
		        path: '/detail',
		          parms:{
		        	sa:1
		        }
		      }, {
		        text: '结果',
		        path: '/result',
		        parms:{
		        	sa:2
		        }
		      }
		    	],
      msg: '我的首页'
    }
  },
    created (){
	this.getfootoparm();
  	//console.log(this.toson.name)
  	
  },
  methods:{


getfootoparm(){
	eventVue.$on('myEventfoot',value=>{
    console.log(value+"form header 同类组件")
   })



},
 setPaht (nav,index) {
          	  this.num = index;
          	 // alert(this.num)
  		  		this.$router.push({ path: nav.path, query: nav.parms})  //http://blog.csdn.net/sinat_17775997/article/details/68941091
  },
  	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a{  display: block;}
.header{ width: 100%; overflow: hidden; height: 44px;position: fixed;  top: 0; left: 0; right: 0; z-index: 999;  margin-left: auto; margin-right: auto; background:#ccc;}
.header-nav{ height: 44px; line-height: 44px; display: flex;;}
.header-nav li{ height: 44px; line-height: 44px; text-align: center; flex:1; margin: 0;;} 

.active {

	background: green;
}


.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
