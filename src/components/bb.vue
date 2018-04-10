<template>
     <div >
         <div>{{btext}}</div>
     </div>
</template>
<script>
import eventVue from '@/bus/eventBus.js';
export default {
  name: 'HelloWorld',
   data () {
        return {
           'btext':"我是B组件内容"
        }
   },
   created:function(){
       this.bbtn();
   },
   methods:{
       bbtn:function(){
            eventVue .$on("myFun",(message)=>{   //这里最好用箭头函数，不然this指向有问题   // 订阅
                 this.btext = message      
            })
       }
    }
}
</script>