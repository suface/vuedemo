<template>
    <div> 

                   <p class="getdate">我是user  page</p> 
                      <p class="getdate"  @click="getstore22">获取user modlues data </p> 
                    <h2>直接mapstateauthor2:{{author2}}</h2>
                  <!--   <h2>login直接{{user.login}}</h2>-->
                    <h2>作者:{{author}}</h2>
                   <h2>用户名{{user_name}}</h2>
                   <h2>user_phone{{user_phone}}</h2>
                      <h2>user_uuid {{user_uuid}}</h2>
                   <p class="getdate"  @click="getstore5">获取 user_uuid</p> 
    </div>
</template>

<script>
 import { mapState,mapMutations ,mapGetters,mapActions} from 'vuex';
import store2 from '@/store/cartstore.js';

export default {
        name: 'user',
          store:store2  ,
        data() {
            return {}
        },
        methods: {
       
            ...mapActions([
            	'ajaxUserInfoActions',
            	 	'ajaxUserInfoActions2'
            	]),
          getstore22(){
     	alert(this.$store.state.user.author);
        },
        
         getstore5(){
     	alert(this.$store.state.user.user_uuid);
     	     console.log("点击this.user_uuid是"+this.user_uuid);

        },
            
        },
        computed:{
        	   ...mapState({
           author2: state => state.user.author2  ,
           // login: state => state.user.login     
        }) ,
            ...mapGetters([
             'user_uuid',
            	'user_name',
            	'user_phone',
            	"author",
            	]),
         
           
        },
      created (){
      	
      	console.log(this);
  	   this.ajaxUserInfoActions(); //初始化用户信息数据
        //	this.aaa();
  		//  this.ajaxUserInfoActions2(); //初始化用户信息数据
        },
    
    }
</script>

<style scoped>
.item-wrapper {
  display: flex;
  background-color: #dfdfdf;
  align-items: center;
  justify-content: center;
}
h4{ background: #eee; padding: 10px;;}

.item {
  flex: 1;
}
	h3{ text-align: center}
.getdate{ padding: 10px; text-align: center; border: 1px solid red; margin: 20px 0;}

.getdate-btn{ padding: 10px; margin: 10px;;}


</style>