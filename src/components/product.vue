<template>
  <div class="product">

    <h4>商品信息</h4>
    <table class="table table-hover table-bordered">
      <thead>
        <tr>
          <th>id</th>
          <th>名称</th>
          <th>价格</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='(shop,index) in shoplist' :key='index'>
          <td>{{shop.id}}</td>
          <td>{{shop.name}}</td>
          <td>{{shop.price}}</td>
          <td>
            <div class="btn btn-info" @click='addToCart(shop)'>加入购物车</div>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
	 import { mapState,mapMutations ,mapGetters,mapActions} from 'vuex';

	
export default {
    name: 'product',
    data() {
      return {
      	  	 isShow:false,
      }
    },
    computed: {
      ...mapGetters(['shoplist'])
    },
    mounted() {
    },
    methods: {
      ...mapActions(['addToCart'])
    }
  }
</script>

<style scoped>
.table-shop > th {
  text-align: center;
}
.btn{  background: #eee; padding: 10px;;}
.item-wrapper {
  display: flex;
  background-color: #dfdfdf;
  align-items: center;
  justify-content: center;
}

.item {
  flex: 1;
}
h4{ background: #eee; padding: 10px;;}


</style>