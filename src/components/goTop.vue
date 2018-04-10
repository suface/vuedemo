<template>
  <div class="footer">
      <div class="goTop" v-show="isFixed"  @click='goPageTop'><slot></slot></div> 
   
  </div>
</template>

<script>
export default {
  name: 'goTop',   // 名字不要和 html header selection 之类的重名
  data () {
    return {
      msg: 'goTop  page',
      isFixed:false,
       throttleScroll: null, //定义一个截流函数的变量
    }
  }, 
  created () {
 
  },
   mounted: function () {
    this.$nextTick(function () {
      window.addEventListener('scroll', this.throttleScroll)
    });
    
    this.throttleScroll = this.throttle(this.handleScroll, 300);
  },
  methods: {
  	 throttle(a,b){
  	 	var c;return function(){var d=this,e=arguments;clearTimeout(c);c=setTimeout(function(){a.apply(d,e)},b)}
  	 	},

  	//获取文档完整的高度 
    getScrollHeight() { 
	return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight); 
   } ,
   
   handleScroll () {
   var scrollTop = window.scrollY|| window.pageYOffset|| document.documentElement.scrollTop;
   var offsetTop =(window.screen.height||window.innerHeight)-100;
 // console.log(scrollTop+',,,'+offsetTop);
  if (scrollTop > offsetTop) {
    this.isFixed = true
  } else {
    this.isFixed = false
  }
},
   
 goPageTop (e) {
      window.scrollTo(0,1);
        if (e.stopPropagation) {
      	e.stopPropagation();
         }
       }
},

destroyed () {
	//注意，如果离开该页面需要移除这个监听的事件，不然会报错。
	  //离开页面需要remove这个监听器，不然还是卡到爆。
	    window.removeEventListener('scroll', this.throttleScroll);
  // window.removeEventListener('scroll', this.handleScroll)
}
}
</script>

<style scoped>

/*返回顶部*/
.goTop{position:fixed;right:10px;bottom:60px;width:42px;height:42px;border:1px solid rgba(243,243,243,.9);background:rgba(0,0,0,.4);z-index:888;border-radius:22px;overflow:hidden;}
.goTop:before{content:" ";display:inline-block;width:1px;height:20px;position:absolute;left:50%;top:50%;margin-top:-10px;background:#fff;}
.goTop:after{content:" ";display:inline-block;-webkit-transform:translateZ(0) rotate(-45deg);transform:translateZ(0) rotate(-45deg);
height:14px;width:14px;border-width:1px 1px 0px 0px;border-color:#fff;border-style:solid;position:absolute;left:50%;top:50%;margin-top:-8px;margin-left:-7px;}

</style>
