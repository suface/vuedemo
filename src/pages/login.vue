<template>
    <div> 

                   <p class="getdate">我是login  page</p> 
                   
     <div class="login_form retainbt retainbb">
          <div class="login_form_list ">
            <input type="tel" v-model="login_phone"  placeholder="请输入手机号码" id="j_login_form_phone"  autocomplete="off"   maxlength="13"  >
          </div>
          
          <div class="login_form_list retainbt">
          <input type="tel"  v-model="login_code" placeholder="请输入验证码" id="j_login_form_code" autocomplete="off" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')"  maxlength="6">
 
        <timerBtn ref="timerbtn" class="code retainbl graytxt"  :second='second' :disabled="disabled" @run="sendCode"></timerBtn>

          </div> 
     </div>
     <!--<p>user_phone:{{user_phone}}</p>
       <p>code:{{code}}</p>-->
      <p>author2:{{author2}}</p>
    <div class="login_form_submit gray" id="j_login_form_submit" @click="getlogin">立即登录</div>
   <P>是否登录login:{{login}}</P>
<!--        <p class="getdate"  @click="getstore5">获取 author2 {{$store.state.login.author2}}</p> 
-->
                  
        <div class="login_form_submit gray" id="j_login_form_submit" @click="touserPage">to user</div>
       
          <div class="login_form_submit gray" id="j_login_form_submit" @click="clearLogin">去除登录信息</div>

    </div>
</template>

<script>
 import { mapState,mapMutations ,mapGetters,mapActions} from 'vuex';
import store2 from '@/store/cartstore.js';
import timerBtn from '@/components/timerBtn';


export default {
        name: 'login',
           store:store2  ,
        data() {
            return {
              login_phone: "15200000000",
              login_code: '1234',
              second:5,  //默认60
              disabled:false,
              isSend:false,
            	
            }
        },
         components:{
         timerBtn:timerBtn

  },
        methods: {
       
          ...mapActions([
            	'ajaxUserLoginActions',
            	// 	'ajaxUserInfoActions2'
            	]),
        
        getstore5(){
     	alert(this.$store.state.login.author2);
     	   

        },
      
         touserPage(){
         	  localStorage.setItem("isLogin",true);
     	//alert("登陆成功区别的页面");
   	        let redirect = decodeURIComponent(this.$route.query.redirect || '/'); //url 转码
            	this.$router.push({ name:"user"})  //http://blog.
        },
        clearLogin(){
         	  localStorage.setItem("isLogin",false);
        },
        sendCode:function(){
            //this.$refs.timerbtn.setDisabled(true); //设置按钮不可用
            //hz.ajaxRequest("sys/sendCode?_"+$.now(),function(data){
                //if(data.status){
                	var isSend=this.isSend;
                	if(!isSend){
                    this.$refs.timerbtn.start(); //启动倒计时
                   }else{
                   	 this.$refs.timerbtn.stop(); //停止倒计时
                   }
                   isSend=!isSend;
                     this.$refs.timerbtn.sonfn(); //获取子类的方法
               // }else{
                  //  this.$refs.timerbtn.stop(); //停止倒计时
              //  }
          //  });
        },
      getlogin(){
      	
      	var login_phone=this.login_phone;
        var login_code=this.login_code;
      	 var regs=/^0?1[3|4|5|7|8][0-9]\d{8}$/;
      	 var  redirect=decodeURIComponent(this.$route.query.redirect || '/'); //url 转码
       	 var $router=this.$router;
     if(!regs.test(login_phone)){
     	alert("请填写正确的手机号码");
     	return false;
     }else if(login_code.length<3){
     	alert("请填写正确的验证码");
     	return false;
     }
     var checkLoginParams={
     	login_phone:login_phone,
     	login_code:login_code,
     	redirect:redirect,
     	$router:$router,
     	
     }
      //	console.log(checkLoginParams.$router);
      //  console.log(checkLoginParams.redirectUrl);
      	this.ajaxUserLoginActions(checkLoginParams);
      	//localStorage.setItem("isLogin",true);
      	//if(this.login==true){
      	//	this.touserPage();
      		
      	//}
      	
      },
            
  },
        computed:{
        	   ...mapState({
             author2: state => state.login.author2  ,
             login: state => state.login.login  ,

           }) ,
           
        },
      created (){
      	
       //里面登录
       var paramData={
       	 redirect:decodeURIComponent(this.$route.query.redirect || '/'), //url 转码
       	 $router:this.$router,
       }
  	    // this.ajaxUserInfoActions(); //初始化用户信息数据
        //	this.aaa();
  		//  this.ajaxUserInfoActions2(); //初始化用户信息数据
        },
    
    }
</script>

<style scoped>
	

 /*Retina 1px border start */
.retainbt,.retainbb,.retainbl,.retainbr,.retainb { position: relative;}
.retainbt:before,.retainbb:after {pointer-events: none;position: absolute;content: ""; height: 1px; background: rgba(32,35,37,.14);left: 0;right: 0;  z-index:26;}
.retainbt:before {top: 0;  z-index:26;}
.retainbb:after {bottom: 0;  z-index:26;}
.retainbl:before,.retainbr:after {pointer-events: none;position: absolute;content: ""; width: 1px; background: rgba(32,35,37,.14); top: 0; bottom: 0}
.retainbl:before {left: 0;  z-index:26;}
.retainbr:after {right: 0;  z-index:26;}
.retainb:after {position: absolute;content: "";top: 0;left: 0; -webkit-box-sizing: border-box; box-sizing: border-box; width: 100%; height: 100%; border: 1px solid rgba(32,35,37,.14); pointer-events: none;    z-index:26;}
@media (-webkit-min-device-pixel-ratio:1.5),(min-device-pixel-ratio:1.5),(min-resolution: 144dpi),(min-resolution:1.5dppx) {
.retainbt:before,.retainbb:after {-webkit-transform:scaleY(.5);transform: scaleY(.5) }
.retainbl:before,.retainbr:after {-webkit-transform: scaleX(.5); transform: scaleX(.5) }
.retainb:after { width: 200%; height: 200%;-webkit-transform: scale(.5); transform: scale(.5) }
.retainbt:before,.retainbl:before,.retainb:after {-webkit-transform-origin: 0 0;transform-origin: 0 0}
.retainbb:after,.retainbr:after { -webkit-transform-origin: 100% 100%;transform-origin: 100% 100%}
}
@media (-webkit-device-pixel-ratio:1.5) {
.retainbt:before,.retainbb:after { -webkit-transform: scaleY(.6666); transform: scaleY(.6666) }
.retainbl:before,.retainbr:after {-webkit-transform: scaleX(.6666); transform: scaleX(.6666)}
.retainb:after {width: 150%; height: 150%;-webkit-transform: scale(.6666); transform: scale(.6666) }
}
@media (-webkit-device-pixel-ratio:3) ,(min-device-pixel-ratio:3){
.retainbt:before,.retainbb:after { -webkit-transform: scaleY(.3333); transform: scaleY(.3333)}
.retainbl:before,.retainbr:after { -webkit-transform: scaleX(.3333); transform: scaleX(.3333)}
.retainb:after {width: 300%;height: 300%; -webkit-transform: scale(.3333);transform: scale(.3333)}
}
@media (-webkit-min-device-pixel-ratio:4),(min-device-pixel-ratio:4) {
.retainbt:before,.retainbb:after { -webkit-transform: scaleY(.25); transform: scaleY(.25)}
.retainbl:before,.retainbr:after { -webkit-transform: scaleX(.25); transform: scaleX(.25)}
.retainb:after {width: 400%;height: 400%; -webkit-transform: scale(.25);transform: scale(.25)}
}

/*tip css*/
#alert_msg{ position: fixed; left:50%;  top:40%; width:50%; margin-left:-25%; z-index:998; background: rgba(0,0,0,.75);   min-height:40px; line-height:22px; text-align:center; color:#fff; font-size:12px; padding:10px;  border-radius:5px;-webkit-box-sizing:border-box; box-sizing:border-box; -webkit-transition:opacity .3s;transition:opacity .3s; opacity:0; visibility:hidden;
}
#alert_msg.alert_msg_show{-webkit-transform:translateZ(0); transform:translateZ(0); opacity:1; visibility:visible;}
	
	
.login_form{ margin:15px 0;padding: 0px 0 0px 15px; background:#fff; }
.login_form_list{ min-height:22px; position:relative; padding:9px 0;overflow:hidden;}
.login_form_list input{ background:#fff; border:0; font-size:14px; line-height:16px; padding:5px 0; overflow:hidden; display:block; min-width:200px; width:100%;}
.login_form_list .code{ position:absolute; right:0; top:0; bottom:0; height:46px; line-height:46px; width:105px; z-index:9;  color:#ec1161; font-size:14px; }
.login_form_list .code.graytxt{ color:#ccc;}
.login_form_list .code button{ height:46px; line-height:46px; width:100%; z-index:9;  color:#ec1161; font-size:14px}
.login_form_list .code:active{ background:rgba(0,0,0,.1);}
.login_form_submit{ margin:15px; text-align:center; font-size:15px; background:#ec1161; color:#fff; height:44px; line-height:44px; border-radius:5px;}
.login_form_submit:active{background:#e00857;}
.login_form_submit.gray{ background:#ccc;}
.login_icon{ position:absolute; bottom:30px; left:0; width:100%; text-align:center;height:60px;}
.login_icon img{ width:40px; height:40px; display:block; margin:0 auto; }
.login_introduced{ background:#fff; padding:15px; color:#888; font-size:12px; line-height:20px;}



h3{ text-align: center}
.getdate{ padding: 10px; text-align: center; border: 1px solid red; margin: 20px 0;}

.getdate-btn{ padding: 10px; margin: 10px;;}


</style>