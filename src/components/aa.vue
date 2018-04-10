<template>
      <div >
           <button style="padding: 20px; background: red;" @click="abtn">A按钮</button>
      </div>
</template>
<script>
import eventVue from '@/bus/eventBus.js';

export default {
  name: 'HelloWorld',
      data () {
        return {
                'msg':"我是组件A"
        }
      },
      methods:{
           abtn:function(){
                   eventVue .$emit("myFun",this.msg)   //$emit这个方法会触发一个事件  // 发布
           }
      }
}
</script>