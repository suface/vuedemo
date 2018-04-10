<template>
      <div >

    <button @click="run" :disabled="disabled || time > 0">{{ text }}</button>
      </div>
</template>
<script>

export default {
  name: 'timerBtn',
      data () {
        return {
           	 time: 0,
                'msg':"我是组件A"
        }
      },
      props: {
        second: {
            type: Number,
            default: 60
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
      methods:{
        
         run: function () {
        	this.$emit('run');
        },
        start: function(){
        	this.time = this.second;
        	this.timer();
        },
        sonfn(){
        	alert("我是子类方法");
        },
        stop: function(){
        	this.time = 0;
        	this.disabled = false;
        },
        setDisabled: function(val){
        	this.disabled = val;
        },
        timer: function () {
            if (this.time > 0) {
                this.time--;
                setTimeout(this.timer, 1000);
            }else{
            	this.disabled = false;
            }
        }
        
      },
      computed: {
        text: function () {
            return this.time > 0 ? this.time + 's 后重发' : '获取验证码';
        }
    }
}
</script>
<style>
 button{ height: 100%; line-height: 100%; width:100%; z-index:9;  padding:0 15px; box-sizing: border-box; color:#ec1161; font-size:14px}

.sendSmsBtn{

}
.sendSmsBtn.dissendSmsBtn{
background-color: #FFE39F;
}
</style>