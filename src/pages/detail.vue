<template>
  <div class="hello">
  	
  	 <div class="banner">
         <swiper :options="swiperOption"  ref="mySwiper">
         	
        <!-- 这部分放你要渲染的那些内容 -->
        <swiper-slide v-for='img in banners' :key="img.id">
          <img :src="img.pic_url"/>
        </swiper-slide>
        <!-- 这是轮播的小圆点 -->
 <div class="swiper-pagination"  slot="pagination"></div>
 <!--<div class="swiper-button-prev" slot="button-prev"></div>
 <div class="swiper-button-next" slot="button-next"></div>-->
</swiper>
    </div>
  	
  	
<!--  <Header v-on:toson="datajson"></Header>-->
<p>11111</p><p>11111</p><p>11111</p>
    <h1 class="getdate" @click="submitForm">detail   ajax 请求点击 </h1>
   
     
      {{datajson.tit}}
      
      
      <div>{{bbb}}</div>
            <p>---------------------------</p>

      <p>tab</p>
      <ul class="tab-nav">
            <li 
            v-for="(item,index) in tabs" 
            :class="{active2:index == num}"
             @click="tab(index)">{{item}}</li>
        </ul>
        
         <div class="tab-content">
   	<transition name="fade">

      <keep-alive>
<component v-bind:is="currentView">
  <!-- 组件在 vm.currentview 变化时改变！ -->
</component>
       </keep-alive>
      	 </transition>

        </div>
        
        <!--<div class="tab-content">
            <div class="tab-content-one"
            v-for='(itemCon,index) in tabContents' 
            v-show=" index == num">{{itemCon}}
            </div>
        </div>-->
        
        
  </div>
</template>

<script>

// https://www.cnblogs.com/sichaoyun/p/6690322.html
//  父传子组件 子组件用props接收数据
//  子传父组件 子组件用this.$emit() 例如：
// this.$emit('showbox','the msg'); //触发showbox方法，'the msg'为向父组件传递的数据
//import Vue from 'vue'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.min.css';

import tab_0 from '@/components/tabcotent0.vue';
import tab_1 from '@/components/tabcotent1.vue';
import tab_2 from '@/components/tabcotent2.vue';



//// 注册  
//Vue.component('view_0', tab_0)
//Vue.component('view_1', tab_1)
//Vue.component('view_2', tab_2)


export default {
  name: 'detail',
 
  data () {
    return {
    	bbb: '',
    	 loadBtn:true,
    	 
       currentView:'view_0',

    	datajson:"",
      msg: '详细页',
      	banners:[
    	  { 
    	  	id:"1",
    	  	brand_name:'曼秀雷敦/Mentholatum',
          pic_url:'http://lrlz-media.image.alimmdn.com/upload/2018-02-26-17-23-45417.png',
       },
        {  	id:"2",
        	brand_name:"美宝莲/Maybelline",
          pic_url:"http://lrlz-media.image.alimmdn.com/upload/2018-02-26-17-43-37459.png",
       }
    	],
    	
    	 tabs: ["标题一", "标题二","标题三"],
        tabContents: ["内容一", "内容二","内容三"],
        num: 1,
    	
    	
      rocket: false,
      requestStatus: true,
      swiperOption: {
      	pagination: '.swiper-pagination',
        slidesPerView: 'auto',
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 30,
        onSlideChangeEnd: swiper => {
          // 这个位置放swiper的回调方法
            this.page = swiper.realIndex + 1
            this.index = swiper.realIndex
        }
      },
    }
    
  },
 // props:['FromFatherNav'],
   components:{
	 swiper,
    swiperSlide,
      // 注册所有组件
                'view_0':tab_0,
                 'view_1':tab_1,
                  'view_2':tab_2

  },
  created (){
  	
  	this.aaa();
  		console.log("获取的参数"+this.$route.query.sa) ;
  	 //var id = this.$route.query.id;
  //	alert("获取的参数"+id);
  	
  },
  
  
          
  methods: {
  	changeFatherNav(){
  		
  		
  	},
  	
  	toshow(childparm) {
        this.bbb = childparm;
   },
   tab(index) {
            this.num = index;
            this.currentView='view_'+index;
              	console.log(this.currentView)
       },
  submitForm () {
  	//debugger;
  //	alert(12);
  	//var     urlss= 'https://z.lrlz.com/http/lrlzapp.wx.jaeapp.com/app/inter/getProDetail.hh?appKey=6581235709&appVer=3.2.1&seq=300232416212701192&product_uuid=J52741OTo9&user_uuid=60BVx69000';
   //var ursss="http://lrlzapi.wx.jaeapp.com/api.special.page.ss?reflesh=&uuid=6f0y2liQXC&type=&seq=981785108270601192";
   var urss2="https://z.lrlz.com/p.py?uri=http://lrlzapp.wx.jaeapp.com//times/time/now.hh";
   
    this.$http.get(urss2).then((response) => {
                    // success
                    
                  alert("2哈哈detail数据是："+response.data.success);
                })
                .catch((error) => {
                    //error
                    console.log(error);
                })
   

},
aaa (){
	console.log('in')
	let datajson={
		tit: '123',
		name: 'asd'
	}
	this.datajson=datajson;
	
}
}
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner{ width: 100%;}
.banner img{ width: 100%;}


.getdate{ padding: 10px; text-align: center; border: 1px solid red;}

.tab-nav{  width: 100%;}
.tab-nav{ height: 44px; line-height: 44px; display: flex;;}
.tab-nav li{ height: 44px; line-height: 44px; text-align: center; flex:1; margin: 0;;} 
.active2 {

	background: #eee;
}
.tab-content{ width: 100%;min-height: 100px;  margin-bottom: 50px;}
.tab-content-one{ min-height: 100px; text-align: center; border: 1px solid red}


</style>
