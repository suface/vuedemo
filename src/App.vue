<template>
  <div id="app">
    <div class="page">
      <app-head></app-head>
      <!--keep-alive 切换路不会触发mounted-->
      <keep-alive>
      	<transition name="fade">
      	<router-view></router-view>
      	 </transition>
      </keep-alive>
      <app-foot><h1>@ sky 版权所有</h1></app-foot>
    </div>
  </div>
</template>

<script>

import Headers from '@/components/Header.vue';
import Footers from '@/components/Footer.vue';
import store from '@/store/store';


export default {
  name: 'app',
  components: {
    'app-head': Headers,
    'app-foot': Footers,
     store:store,
  },
  activated: function () {
      console.log(3)
    },
    deactivated: function () {
      console.log(4)
    }
}
</script>

<style>
#app{
 width: 100%; display: block; overflow: hidden;
}
.page{
  position: relative; padding: 44px 0;
  z-index: 99;
}


.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}



</style>