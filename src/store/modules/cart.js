//你可以指定一个Mutation 在其中发起ajax 然后拿到了res之后就state.xx = res
//接下来在某个你需要的hook里commit一下这个mutation 去驱动他
//之后就可以在组件内部 this.$store.state.xx 获取到这个数据 很简单的 如果你需要异步的一些操作就需要actions

//初始化数据
const state = {
		 count: 0,
		 author:"cat store 张珊",
	
	 //商品列表
    shop_list: [{
        id: 11,
        name: '鱼香肉丝',
        price: 12,
      }, {
        id: 22,
        name: '宫保鸡丁',
        price: 14
      }, {
        id: 34,
        name: '土豆丝',
        price: 10
      }, {
        id: 47,
        name: '米饭',
        price: 2
      }],
      
      
      
      
 //添加到购物车的商品（已选商品）
      added:[]
	
	
};

//getter 抛出去的数据
//getter 抛出去的数据
const getters = {
    //商品列表
    shoplist:state => state.shop_list,
    //购物车的列表
    cartProducts:state=>{
        return state.added.map(({id,num})=>{
            let product = state.shop_list.find(n=>n.id == id)
            // console.info('product',product)
            return {
                ...product,
                num
            }
        })
    },
    //计算总价
    totalPrice:(state,getters)=>{
        let total = 0;
        getters.cartProducts.forEach(n=>{
            total += n.price * n.num
        })
        return total;
    },
    //计算总数量
    totalNum:(state,getters)=>{
        let total = 0;
        getters.cartProducts.forEach(n=>{
            total += n.num
        })
        return total;
    },


};

//action 异步的操作
const actions = {
//	 addAction(context,n) {
//	 	 setTimeout(() => { context.commit('add',n) }, 2000);
//      console.log('我提前执行了');
//     // context.commit('add');
//  },

    addToCart(context,product) {
     context.commit('add',{id:product.id});
    },
     clearAllCart(context) {
     context.commit('clearAll');
    },
     delProduct(context,product) {
     context.commit('del',product);
    },
	
	
};

//mutation
const mutations = {
    //添加到购物车操作
    add(state,{id}){
        let record = state.added.find(n=>n.id == id);
        if(!record){
            state.added.push({
                id,
                num:1
            })
        }else {
            record.num++
        }
        // console.info(record)

    },

    //清除购物车
    clearAll(state){
        state.added = []
    },
    //删除购物车的指定的商品
    del(state,product){
        //console.info(state,product)
        state.added.forEach((n,i)=>{
            if(n.id == product.id){
                //console.info(11,n)
                //找到index的下标值
                state.added.splice(i,1)
            }
        })
    },
}

export default {
  state,
  mutations,
  actions,
  getters,
};