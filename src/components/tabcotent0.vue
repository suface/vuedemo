<template>
      <div >
11111 tab
      </div>
</template>
<script>
import eventVue from '@/bus/eventBus.js';

export default {
  name: 'view_0',
      data () {
        return {
                'msg':"我是组件A"
        }
      },
      methods:{
          
      }
}
</script>
<style>
/*切换动画*/
.fade-transition {
    transition: opacity 0.3s ease;
}
.fade-enter,
.fade-leave {
    opacity: 0;
}
</style>