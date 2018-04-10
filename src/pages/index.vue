<template>
	
  <div class="index">
      
       <router-link to="/yzcar" class="getdate">去友赞的购物车</router-link>
    <router-link to="/yzdetail" class="getdate">去友赞的详细页</router-link>
     <router-link to="/cart" class="getdate">去购物车2</router-link>
      <router-link to="/user" class="getdate">去用户信息页面</router-link>
      
          <router-link to="/login" class="getdate">登录 页面</router-link>
   <router-view></router-view>

     <h1 class="getdate" @click="getstore">请求点击  store</h1>
<h1 class="getdate" >author是{{author}}</h1>
   <h1 class="getdate" @click="submitForm">detail   ajax 请求点击 </h1>
   
   <div class="getdate">
       <button @click="loadform">设置作者</button>  
     <input v-model="inputname" placeholder="edit me">
     <p>author is: {{ inputname }}，设置后：{{this.$store.state.author}}</p>

</div>


<div class="getdate">
<!-- <h3>computed里面count333 ： {{count333}}</h3>
-->     <p>同步操作 在mutations 里写了两个方reduce  add</p>

	        <button class="getdate-btn" @click="reduce(1) ">-</button>
	            <h3>$store.state.count  stote里面：{{$store.state.count}}</h3>
	     	    <!--  <h3>this.$store.getters.count;  stote里面：{{count2}}</h3>-->
                   <h3>count;  stote里面：{{count}}</h3>
		     <button class="getdate-btn" @click="add(1)">+</button>
		    <!--   <button class="getdate-btn" @click="$store.commit('add',4)">+</button>-->

</div>


<div class="getdate">
     <p>异步操作 在actions里写了两个方法addAction和reduceAction，</p>
	        <button class="getdate-btn" @click="reduceAction(2) ">-</button>
	            <h3>stote里面：{{$store.state.count}}</h3>
	     	    
		     <button class="getdate-btn" @click=" addAction(4)">+</button>

<!--		     <button class="getdate-btn" @click=" $store.dispatch('addAction',4)">+</button>
-->
</div>

     v-enter: 定义进入过渡的开始状态。在元素被插入时生效，在下一个帧移除。

v-enter-active: 定义进入过渡的结束状态。在元素被插入时生效，在 transition/animation 完成之后移除。

v-leave: 定义离开过渡的开始状态。在离开过渡被触发时生效，在下一个帧移除。

v-leave-active: 定义离开过渡的结束状态。在离开过渡被触发时生效，在 transition/animation 完成之后移除。
<div  class="getdate">
     <input  type="button" value="toggle" v-on:click="toggle()"> <br />
    <div v-show="isShow" style="width: 100px;height: 100px;background: red"></div>
    </div>
   	  <p style="height: 20px;;">底部</p>
   	  <p style="height: 20px;;">底部</p>
   	  
   	  
   	  
   	    <youzan >api demo</youzan>
   	     
  <p style="height: 800px;;">index</p>

	
	<goTop></goTop>	
  </div>
</template>

<script>


import goTop from '@/components/goTop.vue';
import youzan from '@/components/youzan.vue';

import store from '@/store/store';
 import { mapState,mapMutations ,mapGetters,mapActions} from 'vuex';


//console.log(initItems);
export default {
  name: 'index',
   store:store  ,
   data () {
    return {
    	inputname:"",
 // inputname:"",
    checkList: ['选中且禁用','复选框 A'],
    	 isShow:false,
    	 	alertVisible: false,
    	  dialogVisible: false,
    
      
      
    }
  },

  components:{
	youzan,
    goTop
  },
  mounted:function(){
            console.log(this.$store)//控制台
       },
       
 computed:{
 	 ...mapState([////映射  this.$store.state
 	 	"count",
 	 	"author"
 	 	]),  
//  count2(){
//      return this.$store.getters.count;
//  },
     ...mapGetters([//映射  this.$store.getters.count;
          "count"
          ])

    
    
},

   methods: {
  	  ...mapMutations([//映射同步操作
      'reduce' ,'add'  // 映射 this.reduce() 为 this.$store.commit('reduce')
    ]),
     ...mapActions([ //映射异步操作
     	'addAction','reduceAction'   //this.addActio为   this.$store.dispatch("addAction")
     	]),
     
  	  setBannerSrc (src) {
      return src
    },
    
    
    
    
     toggle(){
     	this.isShow = !this.isShow;
     },
     
     getstore(){
     	    	alert("获取storemessage:是---"+this.$store.state.message);
     },
      loadform() {  
                this.$store.commit("newAuthor",this.inputname);
               
    }  ,
     
      submitForm () {
  	//debugger;
  	alert(11);
  	//var     urlss= 'https://z.lrlz.com/http/lrlzapp.wx.jaeapp.com/app/inter/getProDetail.hh?appKey=6581235709&appVer=3.2.1&seq=300232416212701192&product_uuid=J52741OTo9&user_uuid=60BVx69000';
  // var ursss="http://lrlzapi.wx.jaeapp.com/api.special.page.ss?reflesh=&uuid=6f0y2liQXC&type=&seq=981785108270601192";
   var urss="https://api.douban.com/v2/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&city=杭州&start=0&count=100&client=somemessage&udid=dddddddddddddddddddddd";

    
    
  var thisApiUrl = "http://lrlzapp.wx.jaeapp.com/app/inter/search.hh?appkey=6581235709&keywords=&sidx=rate&status=7&page=1&rows=10";
 var thisApiUrl="https://z.lrlz.com/p.py?uri=http://lrlzapp.wx.jaeapp.com//times/time/now.hh";
		   
	  //this.$http.get(thisApiUrl).then((response) => {
      this.$axios.get(thisApiUrl).then(function (response) {
      	var data=response.data;
      	    if(data.succes==true){
      	    	
      	    }
	 console.log("哈index哈哈"+response.data.success);
    
   }).catch(function (error) {
    console.log(error);
});	
  
  
       this.$http.jsonp('https://sug.so.360.cn/suggest',{word:'a'},{jsonp:'callback'}).then(function(res){
                            console.log(res.data);
                        },function(res){
                            console.log(res.status);
                        });
    
},
     
     
     
     
   }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.getdate{ padding: 10px; text-align: center; border: 1px solid red; margin: 20px 0;}

.getdate-btn{ padding: 10px; margin: 10px;;}

</style>
