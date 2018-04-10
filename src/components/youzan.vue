<template>
      <div >
    
      	<p class="getdate">友赞 vant  <slot></slot></p>
      	 <button class="getdate"@click="abtn0">alert 函数调用</button>
           <button class="getdate"@click="abtn">alert</button>
              <button class="getdate" @click="abtn2">comfirm</button>
              
              <button class="getdate" @click="abtn3">多个 alert</button>
      </div>
</template>
<script>

import { Dialog } from 'vant';

export default {
  name: 'youzan',
      data () {
        return {
                'msg':"我是组件A"
        }
      },
      methods:{
      	 abtn0:function(){
			Dialog.alert({
			  message: '函数弹窗内容'
			}).then(() => {
			  // on close
			});
           	
           },
           abtn:function(){
           	this.$dialog.alert({
               message: '弹窗内容'
            });
           	
           },
            abtn3:function(){
           	this.$dialog.alert({
               message: '多个弹窗内容1'
            });
            
            	this.$dialog.alert({
               message: '多个弹窗内容2'
            });
            
            	this.$dialog.alert({
               message: '多个弹窗内容3'
            });
           	
           },
           abtn2:function(){
			   this.$dialog.confirm({
					  title: '标题',
					  message: '弹窗内容'
					}).then(() => {
					  // on confirm
					}).catch(() => {
					  // on cancel
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
