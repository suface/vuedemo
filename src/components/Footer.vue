<template>
  <div class="footer">
      <ul class="footer-ul"  > <li><slot></slot> footer</li>  </ul>
   
  </div>
</template>

<script>
import eventVue from '@/bus/eventBus.js';


export default {
  name: 'footerpage',   // 名字不要和 html header selection 之类的重名
  data () {
    return {
      msg: 'footer page'
    }
  }, 
  created () {
    this.toHeadParm();
  },
  methods: {
   toHeadParm(){
      eventVue.$emit('myEventfoot',this.msg)
   },
   
   
   
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer{ width: 100%; overflow: hidden; height: 44px;position: fixed; text-align: center;  bottom: 0; left: 0; right: 0; z-index: 999;  margin-left: auto; margin-right: auto; background:#ccc;}
.footer-ul{  text-align: center;height: 44px; line-height: 44px; display: flex;;}
.footer-ul li{ height: 44px; line-height: 44px; text-align:  center; flex:1; margin: 0;;} 

</style>
