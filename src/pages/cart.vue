<template>
      <div class="cart" >
         <p class="getdate">我是cart page</p> 
         
          <p class="getdate"  @click="getstore22">获取其他modal  data</p> 
         
          <h3>Vuex购物车demo</h3>
        <!-- 商品的列表 -->
        <product class="getdate"></product>
        <!-- 购物车的列表 -->
        <cartinfo class="getdate"></cartinfo>
        <!-- 总数量价格 -->
        <info class="getdate"></info>
        
        
      </div>
</template>
<script>
import product from '@/components/product'; //商品的列表组件
import cartinfo from '@/components/cartinfo'; //已选商品的组件
import info from '@/components/info'; //总数量价格的组件

import store from '@/store/cartstore.js';
 import { mapState,mapMutations ,mapGetters,mapActions} from 'vuex';


export default {
  name: 'cart',
    store:store  ,
      data () {
        return {
                'msg':"我是组件A"
        }
      },
       computed:{
 	
     ...mapGetters([//映射  this.$store.getters.count;
            ...mapGetters(['cartProducts'])
          ])
},
      components: {
    product,
    cartinfo,
    info,
  },
      methods:{
            ...mapMutations([//映射同步操作
    //  'add' , // 映射 this.reduce() 为 this.$store.commit('add')
   //   'clearAll' ,
    ]),
     ...mapActions([ //映射异步操作
     //	'addToCart',   //this.addActio为   this.$store.dispatch("addAction")
     //	'clearAllCart',
     	'delProduct',
     	]),
     getstore22(){
     	alert(this.$store.state.cart.author);
     },
  	  setBannerSrc (src) {
      return src
    },
    
    
      }
}
</script>

<style scoped>
	h3{ text-align: center}
.getdate{ padding: 10px; text-align: center; border: 1px solid red; margin: 20px 0;}

.getdate-btn{ padding: 10px; margin: 10px;;}

</style>
<style lang="less">
	.card-goods {
  padding: 10px 0;
  background-color: #fff;
  &__item {
    position: relative;
    background-color: #fafafa;
    .van-checkbox__label {
      width: 100%;
      padding: 0 10px 0 15px;
      box-sizing: border-box;
    }
    .van-checkbox__icon {
      top: 50%;
      left: 10px;
      z-index: 1;
      position: absolute;
      margin-top: -10px;
    }
    .van-card__price {
      color: #f44;
    }
  }
}
</style>
