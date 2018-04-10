<template>
  <div class="hello">
  	
  	result
  	    <aa ></aa>
兄弟之间通讯
      <bb ></bb>
            <p>------------------购物车操作---------------------</p>
<!--            <h1 class="getdate" >car author是{{author}}</h1>
-->
            
      <div class="getdate">
      	 <li v-for="(item,index) in filtercarlist" class="carlist">
      	 	<span class="selectedbtn" @click="selectedProduct(item)" v-bind:class="{ on: item.checked }">选择</span>
      	 	           {{index}} {{item.name}}
                    <a href="javascript:;" @click="changeMoney(item,-1)">-</a>
                            <input type="text" v-model="item.count"  >
                            <a href="javascript:;" @click="changeMoney(item,1)">+</a>
                            
                            <span>价格{{ item.price*item.count|formprice2}}</span>
                            <span class="dels" @click="delConfirm(index)">删除</span>
                            
         </li>
       <p class="showmore" v-if="canshowall" @click="showmore()">显示更多 默认显示3条，总共5条</p> 
     <p class="selectedbtn selectedbtnall" v-bind:class="{ on: checkAllFlag }" @click="checkAll(!checkAllFlag)">全选</p>
     <p>总价： {{totalMoney}}</p>
     
</div>
<div class="getdate">
	       <li> 当前显示价格  {{nowprice}} </li>
	        <li> 局部过滤后显示价格保留2位小数 {{nowprice|formprice2}}</li>
	           <li> 全局过滤后显示价格对折（在局部2位） {{nowprice|discount|formprice2}}</li>
</div>

<div class="getdate">
	 <h3>{{$store.state.user_name}}</h3>
	     
	     
	     
        <label class="col-sm-2 control-label">用户名</label>
        <div class="getdate-btn2">
            <input type="text"  v-model="username" v-on:change="userNameChange" class="form-control" :placeholder="username">
        </div>
        
        
        <div class="getdate-btn2" @click="submitUserName">提交
        </div>

       
	     

</div>
            <p>---------------------------------------</p>

      <div class="result-nav" style="display: flex;">
    <router-link to="/result/result1"> 去  result1</router-link>
    <router-link to="/result/result2">去 result2</router-link>
    <router-view></router-view>
  </div>
      
  </div>
</template>

<script>
import aa from '@/components/aa';
import bb from '@/components/bb';

import store from '@/store/userstore';
import carfilter from '@/filters/carfliter.js'; //全局过滤器

let carjson={
  "status": 0,
  "message": "success",
  "result": {
      "totalHoney":59,
      "list":[
      {
      "name": "芳草集",
      "price": 19,
      "count": 1,
      "amount": 9,
      "imgPic": "static/img/test.jpg",
      "gifts": [
        {
          "partId":"10001",
          "partName":"打火机"
        },
        {
          "partId":"10002",
          "partName":"火柴"
        }
      ]
      },
      {
      "name": "妮雅11",
      "price": 20,
      "count": 1,
      "amount": 2,
      "imgPic": "static/img/test1.jpg",
        "gifts": [
          {
            "partId":"10001",
            "partName":"打火机"
          },
          {
            "partId":"10002",
            "partName":"火柴盒"
          }
        ]
      },
       {
      "name": "妮雅22",
      "price": 20,
      "count": 1,
      "amount": 2,
      "imgPic": "static/img/test1.jpg",
        "gifts": [
          {
            "partId":"10001",
            "partName":"打火机"
          },
          {
            "partId":"10002",
            "partName":"火柴盒"
          }
        ]
      },
       {
      "name": "妮雅33",
      "price": 20,
      "count": 1,
      "amount": 2,
      "imgPic": "static/img/test1.jpg",
        "gifts": [
          {
            "partId":"10001",
            "partName":"打火机"
          },
          {
            "partId":"10002",
            "partName":"火柴盒"
          }
        ]
      },
        {
          "name": "兰蔻啊",

          "price": 20,
          "count": 2,
          "amount": 20,
          "imgPic": "static/img/test1.jpg",
          "gifts": [
            {
              "partId":"10001",
              "partName":"打火机"
            },
            {
              "partId":"10002",
              "partName":"火柴盒"
            }
          ]
        }
      ]
  }

};




export default {
  name: 'result',
  store:store  ,
  data () {
    return {
    	pagename: 'father',
    	username:"",
    	nowprice:11,
    	canshowall:true,
    carjson:carjson,
    totalMoney: 0,
    checkAllFlag: false,
    delFlag: false,
    limitNum:3,
     productList: carjson.result.list,
    }
    
  },
   components:{
	aa, bb

  },
  filters:{// 局部过滤器
  	formprice2(value){
  		return value=value.toFixed(2);
  	},
  	sum: function (value) {
                        return value + 4;
    },
  	
  },
  
  computed: {
    filtercarlist: function() {
      return this.productList.slice(0, this.limitNum);
    }
  },
  methods:{
            userNameChange(){
                //this.$emit("childChange","username",this.username)
                this.$store.state.user_name = this.username;
            },
             submitUserName(){
                //alert(this.$parent.$data.username +"==="+ this.$parent.$data.userarea);
                this.$store.commit("showUserName");
            },
            
           changeMoney: function(product, way) {
              if (way > 0) {
                    product.count++;
                     if (product.count >=product.amount) {
                    product.count = product.amount;
                   }
                    
               }
                else {
                    product.count--;
                   if (product.count < 1) {
                    product.count = 1;
                   }
               }
              this.calcTotalPrice();
          },
          
             calcTotalPrice: function() {
              var _this = this;
		        this.totalMoney = 0;
		     
		        this.productList.forEach(function(item, index) {
		          if (item.checked) {
		            _this.totalMoney += item.price * item.count;
		         }
		        });
            },
            
            selectedProduct: function(item) {
        if (typeof item.checked == 'undefined') {
          // Vue.set(item, "checked", true);
          this.$set(item, "checked", true);
        }
        else {
          item.checked = !item.checked;
        }
        
        
        
        var arr=[],

				_this=this;

			this.productList.forEach(function(item,index){

				if (item.checked) {
					arr.push(index);
				}

			})

			if (arr.length==this.productList.length) {
				this.checkAllFlag=true;
			}else{
				this.checkAllFlag=false;
			}
        
        
        this.calcTotalPrice();
      },
       checkAll: function(flag) {
        this.checkAllFlag = flag;
        var _this = this;
        this.productList.forEach(function (item, index) {
          if (typeof item.checked == 'undefined', _this.checkAllFlag) {
            _this.$set(item, "checked", _this.checkAllFlag);
          }
          else {
            item.checked = _this.checkAllFlag;
          }
        
        });
        this.calcTotalPrice();
      },
      delConfirm: function(index) {
       this.productList.splice(index, 1);
           this.delFlag=false;
            this.calcTotalPrice();
      },
      showmore(){
      	//alert("查看更多");
      	this.limitNum = this.productList.length;
      	this.canshowall=false;
      	
      },
     
      
            
        }
 
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a{  display: block;}
.result-nav{ height: 44px; line-height: 44px; display: flex; border: 1px solid #888;}
.result-nav a{ width: 100px;;  height: 44px; line-height: 44px; text-align: center; flex:1; ;} 

.active {

	background: green;
}

.getdate{ padding: 10px; text-align: center; border: 1px solid red; margin: 20px 0;}

.getdate-btn2{ padding: 10px; margin: 10px;; border: 1px solid #ccc;}

.carlist{ border-bottom: 1px solid #333;}
.carlist a{ display: inline-block; padding: 15px; background: #ccc; font-size: 24px;}
.carlist  input{  border: 1px solid #eee; height: 20px; width: 30px;;}
.carlist  .dels{ background: red; padding: 20px; color: #fff;}
.selectedbtn{ border: 1px solid #333;;}
.selectedbtn.on{  background: red;;}
.showmore,.selectedbtnall{  padding: 10px 0; width: 100%; margin: 10px 0; border: 1px solid #333;;}
</style>

