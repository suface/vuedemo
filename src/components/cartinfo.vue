<template>
    <div>
        <h4>已选商品</h4>
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>id</th>
                    <th>名称</th>
                    <th>价格</th>
                    <th>数量</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for = '(shop,index) in cartProducts'>
                    <td>{{shop.id}}</td>
                    <td>{{shop.name}}</td>
                    <td>{{shop.price}}</td>
                    <td>{{shop.num}}</td>
                    <td>
                        <div @click='delProduct(shop)' class="btn btn-danger btn-sm">删除</div>
                    </td>
                </tr>
                <tr v-if="!cartProducts.length">
                    <td colspan="5" class="text-center">您的购物车空空如也。。。</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>



<script>
	 import { mapState,mapMutations ,mapGetters,mapActions} from 'vuex';

	
export default {
  name: 'cartinfo',
  data() {
    return {
    //  cartProducts: [],
    };
  },
  computed: {
            ...mapGetters(['cartProducts'])
        },
        methods:{
            ...mapActions(['delProduct'])
        }
};
</script>
<style scoped>
td{ padding: 10px 0;}
h4{ background: #eee; padding: 10px;;}

.getdate{ padding: 10px; text-align: center; border: 1px solid red; margin: 20px 0;}

.getdate-btn{ padding: 10px; margin: 10px;;}

</style>