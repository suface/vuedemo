webpackJsonp([1],{0:function(t,e){},"2Fr2":function(t,e){},"2HJ6":function(t,e){},"4MLQ":function(t,e){},CMvz:function(t,e){},DL0H:function(t,e){},GjDH:function(t,e){},HmPL:function(t,e){},"LZc/":function(t,e){},LdvO:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i=new a.default,o={name:"HelloWorld",props:["toson"],data:function(){return{isActive:!0,num:0,navs:[{text:"首页",path:"/index",parms:{sa:0}},{text:"详细页",path:"/detail",parms:{sa:1}},{text:"结果",path:"/result",parms:{sa:2}}],msg:"我的首页"}},created:function(){this.getfootoparm()},methods:{getfootoparm:function(){i.$on("myEventfoot",function(t){console.log(t+"form header 同类组件")})},setPaht:function(t,e){this.num=e,this.$router.push({path:t.path,query:t.parms})}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("ul",{staticClass:"header-nav"},t._l(t.navs,function(e,a){return n("li",{key:a,class:{active:a==t.num},on:{click:function(n){t.setPaht(e,a)}}},[t._v(t._s(e.text)+"\n")])}))])},staticRenderFns:[]};var r=n("VU/8")(o,s,!1,function(t){n("ogUj")},"data-v-54291400",null).exports,c={name:"footerpage",data:function(){return{msg:"footer page"}},created:function(){this.toHeadParm()},methods:{toHeadParm:function(){i.$emit("myEventfoot",this.msg)}}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer"},[e("ul",{staticClass:"footer-ul"},[e("li",[this._t("default"),this._v(" footer")],2)])])},staticRenderFns:[]};var u=n("VU/8")(c,l,!1,function(t){n("2HJ6")},"data-v-435351a7",null).exports,d=n("NYxO");a.default.use(d.a);var m={addAction:function(t,e){setTimeout(function(){t.commit("add",e)},2e3),console.log("我提前执行了")},reduceAction:function(t,e){t.commit("reduce",e)}},v=new d.a.Store({state:{message:"Hello World store",a:1,b:"33",count:0,author:"index 作者张珊"},mutations:{newAuthor:function(t,e){t.author=e},add:function(t,e){t.count+=e},reduce:function(t,e){t.count-=e}},getters:{count:function(t){return t.count+=100}},actions:m}),h={name:"app",components:{"app-head":r,"app-foot":u,store:v},activated:function(){console.log(3)},deactivated:function(){console.log(4)}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"page"},[e("app-head"),this._v(" "),e("keep-alive",[e("transition",{attrs:{name:"fade"}},[e("router-view")],1)],1),this._v(" "),e("app-foot",[e("h1",[this._v("@ sky 版权所有")])])],1)])},staticRenderFns:[]};var _=n("VU/8")(h,p,!1,function(t){n("dJd+")},null,null).exports,f=n("/ocq"),g=n("Dd8w"),b=n.n(g),C={name:"goTop",data:function(){return{msg:"goTop  page",isFixed:!1,throttleScroll:null}},created:function(){},mounted:function(){this.$nextTick(function(){window.addEventListener("scroll",this.throttleScroll)}),this.throttleScroll=this.throttle(this.handleScroll,300)},methods:{throttle:function(t,e){var n;return function(){var a=this,i=arguments;clearTimeout(n),n=setTimeout(function(){t.apply(a,i)},e)}},getScrollHeight:function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},handleScroll:function(){var t=window.scrollY||window.pageYOffset||document.documentElement.scrollTop,e=(window.screen.height||window.innerHeight)-100;this.isFixed=t>e},goPageTop:function(t){window.scrollTo(0,1),t.stopPropagation&&t.stopPropagation()}},destroyed:function(){window.removeEventListener("scroll",this.throttleScroll)}},x={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer"},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.isFixed,expression:"isFixed"}],staticClass:"goTop",on:{click:this.goPageTop}},[this._t("default")],2)])},staticRenderFns:[]};var k=n("VU/8")(C,x,!1,function(t){n("qN+J")},"data-v-f6643a90",null).exports,w=n("ymRw"),y=n.n(w),$={name:"youzan",data:function(){return{msg:"我是组件A"}},methods:{abtn0:function(){w.Dialog.alert({message:"函数弹窗内容"}).then(function(){})},abtn:function(){this.$dialog.alert({message:"弹窗内容"})},abtn3:function(){this.$dialog.alert({message:"多个弹窗内容1"}),this.$dialog.alert({message:"多个弹窗内容2"}),this.$dialog.alert({message:"多个弹窗内容3"})},abtn2:function(){this.$dialog.confirm({title:"标题",message:"弹窗内容"}).then(function(){}).catch(function(){})}}},j={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{staticClass:"getdate"},[t._v("友赞 vant  "),t._t("default")],2),t._v(" "),n("button",{staticClass:"getdate",on:{click:t.abtn0}},[t._v("alert 函数调用")]),t._v(" "),n("button",{staticClass:"getdate",on:{click:t.abtn}},[t._v("alert")]),t._v(" "),n("button",{staticClass:"getdate",on:{click:t.abtn2}},[t._v("comfirm")]),t._v(" "),n("button",{staticClass:"getdate",on:{click:t.abtn3}},[t._v("多个 alert")])])},staticRenderFns:[]};var P={name:"index",store:v,data:function(){return{inputname:"",checkList:["选中且禁用","复选框 A"],isShow:!1,alertVisible:!1,dialogVisible:!1}},components:{youzan:n("VU/8")($,j,!1,function(t){n("LZc/")},"data-v-a735a7b8",null).exports,goTop:k},mounted:function(){console.log(this.$store)},computed:b()({},Object(d.e)(["count","author"]),Object(d.c)(["count"])),methods:b()({},Object(d.d)(["reduce","add"]),Object(d.b)(["addAction","reduceAction"]),{setBannerSrc:function(t){return t},toggle:function(){this.isShow=!this.isShow},getstore:function(){alert("获取storemessage:是---"+this.$store.state.message)},loadform:function(){this.$store.commit("newAuthor",this.inputname)},submitForm:function(){alert(11);this.$axios.get("https://z.lrlz.com/p.py?uri=http://lrlzapp.wx.jaeapp.com//times/time/now.hh").then(function(t){t.data.succes,console.log("哈index哈哈"+t.data.success)}).catch(function(t){console.log(t)}),this.$http.jsonp("https://sug.so.360.cn/suggest",{word:"a"},{jsonp:"callback"}).then(function(t){console.log(t.data)},function(t){console.log(t.status)})}})},A={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index"},[n("router-link",{staticClass:"getdate",attrs:{to:"/yzcar"}},[t._v("去友赞的购物车")]),t._v(" "),n("router-link",{staticClass:"getdate",attrs:{to:"/yzdetail"}},[t._v("去友赞的详细页")]),t._v(" "),n("router-link",{staticClass:"getdate",attrs:{to:"/cart"}},[t._v("去购物车2")]),t._v(" "),n("router-link",{staticClass:"getdate",attrs:{to:"/user"}},[t._v("去用户信息页面")]),t._v(" "),n("router-link",{staticClass:"getdate",attrs:{to:"/login"}},[t._v("登录 页面")]),t._v(" "),n("router-view"),t._v(" "),n("h1",{staticClass:"getdate",on:{click:t.getstore}},[t._v("请求点击  store")]),t._v(" "),n("h1",{staticClass:"getdate"},[t._v("author是"+t._s(t.author))]),t._v(" "),n("h1",{staticClass:"getdate",on:{click:t.submitForm}},[t._v("detail   ajax 请求点击 ")]),t._v(" "),n("div",{staticClass:"getdate"},[n("button",{on:{click:t.loadform}},[t._v("设置作者")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputname,expression:"inputname"}],attrs:{placeholder:"edit me"},domProps:{value:t.inputname},on:{input:function(e){e.target.composing||(t.inputname=e.target.value)}}}),t._v(" "),n("p",[t._v("author is: "+t._s(t.inputname)+"，设置后："+t._s(this.$store.state.author))])]),t._v(" "),n("div",{staticClass:"getdate"},[n("p",[t._v("同步操作 在mutations 里写了两个方reduce  add")]),t._v(" "),n("button",{staticClass:"getdate-btn",on:{click:function(e){t.reduce(1)}}},[t._v("-")]),t._v(" "),n("h3",[t._v("$store.state.count  stote里面："+t._s(t.$store.state.count))]),t._v(" "),n("h3",[t._v("count;  stote里面："+t._s(t.count))]),t._v(" "),n("button",{staticClass:"getdate-btn",on:{click:function(e){t.add(1)}}},[t._v("+")])]),t._v(" "),n("div",{staticClass:"getdate"},[n("p",[t._v("异步操作 在actions里写了两个方法addAction和reduceAction，")]),t._v(" "),n("button",{staticClass:"getdate-btn",on:{click:function(e){t.reduceAction(2)}}},[t._v("-")]),t._v(" "),n("h3",[t._v("stote里面："+t._s(t.$store.state.count))]),t._v(" "),n("button",{staticClass:"getdate-btn",on:{click:function(e){t.addAction(4)}}},[t._v("+")])]),t._v("\n\n     v-enter: 定义进入过渡的开始状态。在元素被插入时生效，在下一个帧移除。\n\nv-enter-active: 定义进入过渡的结束状态。在元素被插入时生效，在 transition/animation 完成之后移除。\n\nv-leave: 定义离开过渡的开始状态。在离开过渡被触发时生效，在下一个帧移除。\n\nv-leave-active: 定义离开过渡的结束状态。在离开过渡被触发时生效，在 transition/animation 完成之后移除。\n"),n("div",{staticClass:"getdate"},[n("input",{attrs:{type:"button",value:"toggle"},on:{click:function(e){t.toggle()}}}),t._v(" "),n("br"),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticStyle:{width:"100px",height:"100px",background:"red"}})]),t._v(" "),n("p",{staticStyle:{height:"20px"}},[t._v("底部")]),t._v(" "),n("p",{staticStyle:{height:"20px"}},[t._v("底部")]),t._v(" "),n("youzan",[t._v("api demo")]),t._v(" "),n("p",{staticStyle:{height:"800px"}},[t._v("index")]),t._v(" "),n("goTop")],1)},staticRenderFns:[]};var F=n("VU/8")(P,A,!1,function(t){n("ohjg")},"data-v-755af7b1",null).exports,U=n("7QTg"),S=(n("mgS3"),{render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n11111 tab\n      ")])},staticRenderFns:[]});var E=n("VU/8")({name:"view_0",data:function(){return{msg:"我是组件A"}},methods:{}},S,!1,function(t){n("uPZS")},null,null).exports,N={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n22222\n      ")])},staticRenderFns:[]},z=n("VU/8")({name:"view_1",data:function(){return{msg:"我是组件A"}},methods:{}},N,!1,null,null,null).exports,I={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\ntab内容3333\n      \n      ")])},staticRenderFns:[]},V=n("VU/8")({name:"view_2",data:function(){return{msg:"我是组件A"}},methods:{}},I,!1,null,null,null).exports,L={name:"detail",data:function(){var t=this;return{bbb:"",loadBtn:!0,currentView:"view_0",datajson:"",msg:"详细页",banners:[{id:"1",brand_name:"曼秀雷敦/Mentholatum",pic_url:"http://lrlz-media.image.alimmdn.com/upload/2018-02-26-17-23-45417.png"},{id:"2",brand_name:"美宝莲/Maybelline",pic_url:"http://lrlz-media.image.alimmdn.com/upload/2018-02-26-17-43-37459.png"}],tabs:["标题一","标题二","标题三"],tabContents:["内容一","内容二","内容三"],num:1,rocket:!1,requestStatus:!0,swiperOption:{pagination:".swiper-pagination",slidesPerView:"auto",centeredSlides:!0,paginationClickable:!0,spaceBetween:30,onSlideChangeEnd:function(e){t.page=e.realIndex+1,t.index=e.realIndex}}}},components:{swiper:U.swiper,swiperSlide:U.swiperSlide,view_0:E,view_1:z,view_2:V},created:function(){this.aaa(),console.log("获取的参数"+this.$route.query.sa)},methods:{changeFatherNav:function(){},toshow:function(t){this.bbb=t},tab:function(t){this.num=t,this.currentView="view_"+t,console.log(this.currentView)},submitForm:function(){this.$http.get("https://z.lrlz.com/p.py?uri=http://lrlzapp.wx.jaeapp.com//times/time/now.hh").then(function(t){alert("2哈哈detail数据是："+t.data.success)}).catch(function(t){console.log(t)})},aaa:function(){console.log("in");this.datajson={tit:"123",name:"asd"}}}},O={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("div",{staticClass:"banner"},[n("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption}},[t._l(t.banners,function(t){return n("swiper-slide",{key:t.id},[n("img",{attrs:{src:t.pic_url}})])}),t._v(" "),n("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1),t._v(" "),n("p",[t._v("11111")]),n("p",[t._v("11111")]),n("p",[t._v("11111")]),t._v(" "),n("h1",{staticClass:"getdate",on:{click:t.submitForm}},[t._v("detail   ajax 请求点击 ")]),t._v("\n   \n     \n      "+t._s(t.datajson.tit)+"\n      \n      \n      "),n("div",[t._v(t._s(t.bbb))]),t._v(" "),n("p",[t._v("---------------------------")]),t._v(" "),n("p",[t._v("tab")]),t._v(" "),n("ul",{staticClass:"tab-nav"},t._l(t.tabs,function(e,a){return n("li",{class:{active2:a==t.num},on:{click:function(e){t.tab(a)}}},[t._v(t._s(e))])})),t._v(" "),n("div",{staticClass:"tab-content"},[n("transition",{attrs:{name:"fade"}},[n("keep-alive",[n(t.currentView,{tag:"component"})],1)],1)],1)])},staticRenderFns:[]};var T=n("VU/8")(L,O,!1,function(t){n("irse")},"data-v-f452c7f0",null).exports,R={name:"HelloWorld",data:function(){return{msg:"我是组件A"}},methods:{abtn:function(){i.$emit("myFun",this.msg)}}},H={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("button",{staticStyle:{padding:"20px",background:"red"},on:{click:this.abtn}},[this._v("A按钮")])])},staticRenderFns:[]},B=n("VU/8")(R,H,!1,null,null,null).exports,G={name:"HelloWorld",data:function(){return{btext:"我是B组件内容"}},created:function(){this.bbtn()},methods:{bbtn:function(){var t=this;i.$on("myFun",function(e){t.btext=e})}}},M={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",[this._v(this._s(this.btext))])])},staticRenderFns:[]},q=n("VU/8")(G,M,!1,null,null,null).exports;a.default.use(d.a);var D={showUserName:function(t){alert(t.user_name)}},J=new d.a.Store({state:{message:"Hello World store",user_name:"",author:"作者张珊result"},mutations:D,getters:{}});a.default.filter("discount",function(t){return.5*t});var W={status:0,message:"success",result:{totalHoney:59,list:[{name:"芳草集",price:19,count:1,amount:9,imgPic:"static/img/test.jpg",gifts:[{partId:"10001",partName:"打火机"},{partId:"10002",partName:"火柴"}]},{name:"妮雅11",price:20,count:1,amount:2,imgPic:"static/img/test1.jpg",gifts:[{partId:"10001",partName:"打火机"},{partId:"10002",partName:"火柴盒"}]},{name:"妮雅22",price:20,count:1,amount:2,imgPic:"static/img/test1.jpg",gifts:[{partId:"10001",partName:"打火机"},{partId:"10002",partName:"火柴盒"}]},{name:"妮雅33",price:20,count:1,amount:2,imgPic:"static/img/test1.jpg",gifts:[{partId:"10001",partName:"打火机"},{partId:"10002",partName:"火柴盒"}]},{name:"兰蔻啊",price:20,count:2,amount:20,imgPic:"static/img/test1.jpg",gifts:[{partId:"10001",partName:"打火机"},{partId:"10002",partName:"火柴盒"}]}]}},X={name:"result",store:J,data:function(){return{pagename:"father",username:"",nowprice:11,canshowall:!0,carjson:W,totalMoney:0,checkAllFlag:!1,delFlag:!1,limitNum:3,productList:W.result.list}},components:{aa:B,bb:q},filters:{formprice2:function(t){return t.toFixed(2)},sum:function(t){return t+4}},computed:{filtercarlist:function(){return this.productList.slice(0,this.limitNum)}},methods:{userNameChange:function(){this.$store.state.user_name=this.username},submitUserName:function(){this.$store.commit("showUserName")},changeMoney:function(t,e){e>0?(t.count++,t.count>=t.amount&&(t.count=t.amount)):(t.count--,t.count<1&&(t.count=1)),this.calcTotalPrice()},calcTotalPrice:function(){var t=this;this.totalMoney=0,this.productList.forEach(function(e,n){e.checked&&(t.totalMoney+=e.price*e.count)})},selectedProduct:function(t){void 0===t.checked?this.$set(t,"checked",!0):t.checked=!t.checked;var e=[];this.productList.forEach(function(t,n){t.checked&&e.push(n)}),e.length==this.productList.length?this.checkAllFlag=!0:this.checkAllFlag=!1,this.calcTotalPrice()},checkAll:function(t){this.checkAllFlag=t;var e=this;this.productList.forEach(function(t,n){t.checked,e.checkAllFlag?e.$set(t,"checked",e.checkAllFlag):t.checked=e.checkAllFlag}),this.calcTotalPrice()},delConfirm:function(t){this.productList.splice(t,1),this.delFlag=!1,this.calcTotalPrice()},showmore:function(){this.limitNum=this.productList.length,this.canshowall=!1}}},Z={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[t._v("\n  \t\n  \tresult\n  \t    "),n("aa"),t._v("\n兄弟之间通讯\n      "),n("bb"),t._v(" "),n("p",[t._v("------------------购物车操作---------------------")]),t._v(" "),n("div",{staticClass:"getdate"},[t._l(t.filtercarlist,function(e,a){return n("li",{staticClass:"carlist"},[n("span",{staticClass:"selectedbtn",class:{on:e.checked},on:{click:function(n){t.selectedProduct(e)}}},[t._v("选择")]),t._v("\n      \t \t           "+t._s(a)+" "+t._s(e.name)+"\n                    "),n("a",{attrs:{href:"javascript:;"},on:{click:function(n){t.changeMoney(e,-1)}}},[t._v("-")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.count,expression:"item.count"}],attrs:{type:"text"},domProps:{value:e.count},on:{input:function(n){n.target.composing||t.$set(e,"count",n.target.value)}}}),t._v(" "),n("a",{attrs:{href:"javascript:;"},on:{click:function(n){t.changeMoney(e,1)}}},[t._v("+")]),t._v(" "),n("span",[t._v("价格"+t._s(t._f("formprice2")(e.price*e.count)))]),t._v(" "),n("span",{staticClass:"dels",on:{click:function(e){t.delConfirm(a)}}},[t._v("删除")])])}),t._v(" "),t.canshowall?n("p",{staticClass:"showmore",on:{click:function(e){t.showmore()}}},[t._v("显示更多 默认显示3条，总共5条")]):t._e(),t._v(" "),n("p",{staticClass:"selectedbtn selectedbtnall",class:{on:t.checkAllFlag},on:{click:function(e){t.checkAll(!t.checkAllFlag)}}},[t._v("全选")]),t._v(" "),n("p",[t._v("总价： "+t._s(t.totalMoney))])],2),t._v(" "),n("div",{staticClass:"getdate"},[n("li",[t._v(" 当前显示价格  "+t._s(t.nowprice)+" ")]),t._v(" "),n("li",[t._v(" 局部过滤后显示价格保留2位小数 "+t._s(t._f("formprice2")(t.nowprice)))]),t._v(" "),n("li",[t._v(" 全局过滤后显示价格对折（在局部2位） "+t._s(t._f("formprice2")(t._f("discount")(t.nowprice))))])]),t._v(" "),n("div",{staticClass:"getdate"},[n("h3",[t._v(t._s(t.$store.state.user_name))]),t._v(" "),n("label",{staticClass:"col-sm-2 control-label"},[t._v("用户名")]),t._v(" "),n("div",{staticClass:"getdate-btn2"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",placeholder:t.username},domProps:{value:t.username},on:{change:t.userNameChange,input:function(e){e.target.composing||(t.username=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"getdate-btn2",on:{click:t.submitUserName}},[t._v("提交\n        ")])]),t._v(" "),n("p",[t._v("---------------------------------------")]),t._v(" "),n("div",{staticClass:"result-nav",staticStyle:{display:"flex"}},[n("router-link",{attrs:{to:"/result/result1"}},[t._v(" 去  result1")]),t._v(" "),n("router-link",{attrs:{to:"/result/result2"}},[t._v("去 result2")]),t._v(" "),n("router-view")],1)],1)},staticRenderFns:[]};var Q=n("VU/8")(X,Z,!1,function(t){n("GjDH")},"data-v-16ac7611",null).exports,Y={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n    我是result   子页面111111\n")])},staticRenderFns:[]},K=n("VU/8")({name:"result1",data:function(){return{msg:"我是组件A"}},methods:{}},Y,!1,null,null,null).exports,tt={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n我是result   子页面22222222222>  \n    \n    ")])},staticRenderFns:[]},et=n("VU/8")({name:"result2",data:function(){return{msg:"我是组件A"}},methods:{}},tt,!1,null,null,null).exports,nt=n("Gu7T"),at=n.n(nt),it={name:"product",data:function(){return{isShow:!1}},computed:b()({},Object(d.c)(["shoplist"])),mounted:function(){},methods:b()({},Object(d.b)(["addToCart"]))},ot={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"product"},[n("h4",[t._v("商品信息")]),t._v(" "),n("table",{staticClass:"table table-hover table-bordered"},[t._m(0),t._v(" "),n("tbody",t._l(t.shoplist,function(e,a){return n("tr",{key:a},[n("td",[t._v(t._s(e.id))]),t._v(" "),n("td",[t._v(t._s(e.name))]),t._v(" "),n("td",[t._v(t._s(e.price))]),t._v(" "),n("td",[n("div",{staticClass:"btn btn-info",on:{click:function(n){t.addToCart(e)}}},[t._v("加入购物车")])])])}))])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("id")]),this._v(" "),e("th",[this._v("名称")]),this._v(" "),e("th",[this._v("价格")]),this._v(" "),e("th",[this._v("操作")])])])}]};var st=n("VU/8")(it,ot,!1,function(t){n("yqU/")},"data-v-05ace8dc",null).exports,rt={name:"cartinfo",data:function(){return{}},computed:b()({},Object(d.c)(["cartProducts"])),methods:b()({},Object(d.b)(["delProduct"]))},ct={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h4",[t._v("已选商品")]),t._v(" "),n("table",{staticClass:"table table-hover table-bordered"},[t._m(0),t._v(" "),n("tbody",[t._l(t.cartProducts,function(e,a){return n("tr",[n("td",[t._v(t._s(e.id))]),t._v(" "),n("td",[t._v(t._s(e.name))]),t._v(" "),n("td",[t._v(t._s(e.price))]),t._v(" "),n("td",[t._v(t._s(e.num))]),t._v(" "),n("td",[n("div",{staticClass:"btn btn-danger btn-sm",on:{click:function(n){t.delProduct(e)}}},[t._v("删除")])])])}),t._v(" "),t.cartProducts.length?t._e():n("tr",[n("td",{staticClass:"text-center",attrs:{colspan:"5"}},[t._v("您的购物车空空如也。。。")])])],2)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("id")]),t._v(" "),n("th",[t._v("名称")]),t._v(" "),n("th",[t._v("价格")]),t._v(" "),n("th",[t._v("数量")]),t._v(" "),n("th",[t._v("操作")])])])}]};var lt=n("VU/8")(rt,ct,!1,function(t){n("4MLQ")},"data-v-55359394",null).exports,ut={name:"info",data:function(){return{}},methods:b()({},Object(d.b)(["clearAllCart"])),computed:b()({},Object(d.c)(["totalPrice","totalNum"]))},dt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"item-wrapper"},[n("div",{staticClass:"item"},[t._v("总数：\n            "),n("strong",[t._v(t._s(t.totalNum))])]),t._v(" "),n("div",{staticClass:"item"},[t._v("总价：\n            "),n("strong",[t._v(t._s(t.totalPrice))])]),t._v(" "),n("div",{staticClass:"item btn btn-danger",on:{click:t.clearAllCart}},[t._v("清空购物车")])])])},staticRenderFns:[]};var mt=n("VU/8")(ut,dt,!1,function(t){n("caH3")},"data-v-69b2250a",null).exports,vt={state:{count:0,author:"cat store 张珊",shop_list:[{id:11,name:"鱼香肉丝",price:12},{id:22,name:"宫保鸡丁",price:14},{id:34,name:"土豆丝",price:10},{id:47,name:"米饭",price:2}],added:[]},mutations:{add:function(t,e){var n=e.id,a=t.added.find(function(t){return t.id==n});a?a.num++:t.added.push({id:n,num:1})},clearAll:function(t){t.added=[]},del:function(t,e){t.added.forEach(function(n,a){n.id==e.id&&t.added.splice(a,1)})}},actions:{addToCart:function(t,e){t.commit("add",{id:e.id})},clearAllCart:function(t){t.commit("clearAll")},delProduct:function(t,e){t.commit("del",e)}},getters:{shoplist:function(t){return t.shop_list},cartProducts:function(t){return t.added.map(function(e){var n=e.id,a=e.num,i=t.shop_list.find(function(t){return t.id==n});return b()({},i,{num:a})})},totalPrice:function(t,e){var n=0;return e.cartProducts.forEach(function(t){n+=t.price*t.num}),n},totalNum:function(t,e){var n=0;return e.cartProducts.forEach(function(t){n+=t.num}),n}}};a.default.use(d.a);var ht={state:{count:0,author2:"不了的直接mapState哈哈哈",user_uuid:"",user_name:"",user_phone:"",user_address:"",user_pic:"",login:!1,author:"user store 张珊 cart2345",newslist:[],newsdetail:{},shop_list:[{id:11,name:"鱼香肉丝",price:12},{id:47,name:"米饭",price:2}]},mutations:{setUserInfo:function(t,e){t.user_name=e.nick||"神秘人士",t.user_phone=e.phone,t.user_pic=e.user_pic,t.user_uuid=e.user_uuid,t.user_address=e.user_address,t.login=!0,console.log("state.user_uuid"+t.user_uuid)}},actions:{ajaxUserInfoActions:function(t,e){a.default.http.get("https://z.lrlz.com/p.py?uri=http://lrlzapp.wx.jaeapp.com/app/inter/getUserInfo.hh&uuid=60BVx69000&appkey=6581235709").then(function(e){t.commit("setUserInfo",e.data)},function(){})},ajaxUserInfoActions2:function(){alert(22);a.default.$http.get("https://z.lrlz.com/p.py?uri=http://lrlzapp.wx.jaeapp.com/app/inter/getUserInfo.hh&uuid=60BVx69000&appkey=6581235709").then(function(t){var e=t.data;alert("$axios"+e.list[0].memo),console.log("哈1index哈哈"+t.data.success)}).catch(function(t){})}},getters:{user_uuid:function(t){return t.user_uuid},user_name:function(t){return t.user_name},author:function(t){return t.author},user_phone:function(t){return t.user_phone}}};a.default.use(d.a);var pt={state:{user_uuid:"",user_phone:"",code:"",login:!1,author2:"login store作者"},mutations:{setLoginInfo:function(t,e){t.code=e.code,t.user_phone=e.phone,t.login=!0},toNextPage:function(t,e){var n=e.$router,a=e.redirect;n.push({path:a})}},actions:{ajaxUserLoginActions:function(t,e){console.log(e.login_phone+"”，"+e.login_code),a.default.http.get("https://z.lrlz.com/p.py?uri=http://lrlzapp.wx.jaeapp.com/app/inter/getUserInfo.hh&uuid=60BVx69000&appkey=6581235709").then(function(n){localStorage.setItem("isLogin",!0),t.commit("setLoginInfo",n.data),t.commit("toNextPage",e)},function(){})}},getters:{}};a.default.use(d.a);var _t=new d.a.Store({modules:{cart:vt,user:ht,login:pt},strict:!1}),ft={name:"cart",store:_t,data:function(){return{msg:"我是组件A"}},computed:b()({},Object(d.c)([].concat(at()(Object(d.c)(["cartProducts"]))))),components:{product:st,cartinfo:lt,info:mt},methods:b()({},Object(d.d)([]),Object(d.b)(["delProduct"]),{getstore22:function(){alert(this.$store.state.cart.author)},setBannerSrc:function(t){return t}})},gt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cart"},[n("p",{staticClass:"getdate"},[t._v("我是cart page")]),t._v(" "),n("p",{staticClass:"getdate",on:{click:t.getstore22}},[t._v("获取其他modal  data")]),t._v(" "),n("h3",[t._v("Vuex购物车demo")]),t._v(" "),n("product",{staticClass:"getdate"}),t._v(" "),n("cartinfo",{staticClass:"getdate"}),t._v(" "),n("info",{staticClass:"getdate"})],1)},staticRenderFns:[]};var bt=n("VU/8")(ft,gt,!1,function(t){n("i3Xc"),n("xOgU")},"data-v-4a14508c",null).exports,Ct={name:"user",store:_t,data:function(){return{}},methods:b()({},Object(d.b)(["ajaxUserInfoActions","ajaxUserInfoActions2"]),{getstore22:function(){alert(this.$store.state.user.author)},getstore5:function(){alert(this.$store.state.user.user_uuid),console.log("点击this.user_uuid是"+this.user_uuid)}}),computed:b()({},Object(d.e)({author2:function(t){return t.user.author2}}),Object(d.c)(["user_uuid","user_name","user_phone","author"])),created:function(){console.log(this),this.ajaxUserInfoActions()}},xt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{staticClass:"getdate"},[t._v("我是user  page")]),t._v(" "),n("p",{staticClass:"getdate",on:{click:t.getstore22}},[t._v("获取user modlues data ")]),t._v(" "),n("h2",[t._v("直接mapstateauthor2:"+t._s(t.author2))]),t._v(" "),n("h2",[t._v("作者:"+t._s(t.author))]),t._v(" "),n("h2",[t._v("用户名"+t._s(t.user_name))]),t._v(" "),n("h2",[t._v("user_phone"+t._s(t.user_phone))]),t._v(" "),n("h2",[t._v("user_uuid "+t._s(t.user_uuid))]),t._v(" "),n("p",{staticClass:"getdate",on:{click:t.getstore5}},[t._v("获取 user_uuid")])])},staticRenderFns:[]};var kt=n("VU/8")(Ct,xt,!1,function(t){n("LdvO")},"data-v-b21c406e",null).exports,wt={name:"timerBtn",data:function(){return{time:0,msg:"我是组件A"}},props:{second:{type:Number,default:60},disabled:{type:Boolean,default:!1}},methods:{run:function(){this.$emit("run")},start:function(){this.time=this.second,this.timer()},sonfn:function(){alert("我是子类方法")},stop:function(){this.time=0,this.disabled=!1},setDisabled:function(t){this.disabled=t},timer:function(){this.time>0?(this.time--,setTimeout(this.timer,1e3)):this.disabled=!1}},computed:{text:function(){return this.time>0?this.time+"s 后重发":"获取验证码"}}},yt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("button",{attrs:{disabled:this.disabled||this.time>0},on:{click:this.run}},[this._v(this._s(this.text))])])},staticRenderFns:[]};var $t={name:"login",store:_t,data:function(){return{login_phone:"15200000000",login_code:"1234",second:5,disabled:!1,isSend:!1}},components:{timerBtn:n("VU/8")(wt,yt,!1,function(t){n("HmPL")},null,null).exports},methods:b()({},Object(d.b)(["ajaxUserLoginActions"]),{getstore5:function(){alert(this.$store.state.login.author2)},touserPage:function(){localStorage.setItem("isLogin",!0);decodeURIComponent(this.$route.query.redirect||"/");this.$router.push({name:"user"})},clearLogin:function(){localStorage.setItem("isLogin",!1)},sendCode:function(){var t=this.isSend;t?this.$refs.timerbtn.stop():this.$refs.timerbtn.start(),t=!t,this.$refs.timerbtn.sonfn()},getlogin:function(){var t=this.login_phone,e=this.login_code,n=decodeURIComponent(this.$route.query.redirect||"/"),a=this.$router;if(!/^0?1[3|4|5|7|8][0-9]\d{8}$/.test(t))return alert("请填写正确的手机号码"),!1;if(e.length<3)return alert("请填写正确的验证码"),!1;var i={login_phone:t,login_code:e,redirect:n,$router:a};this.ajaxUserLoginActions(i)}}),computed:b()({},Object(d.e)({author2:function(t){return t.login.author2},login:function(t){return t.login.login}})),created:function(){decodeURIComponent(this.$route.query.redirect||"/"),this.$router}},jt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{staticClass:"getdate"},[t._v("我是login  page")]),t._v(" "),n("div",{staticClass:"login_form retainbt retainbb"},[n("div",{staticClass:"login_form_list "},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.login_phone,expression:"login_phone"}],attrs:{type:"tel",placeholder:"请输入手机号码",id:"j_login_form_phone",autocomplete:"off",maxlength:"13"},domProps:{value:t.login_phone},on:{input:function(e){e.target.composing||(t.login_phone=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"login_form_list retainbt"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.login_code,expression:"login_code"}],attrs:{type:"tel",placeholder:"请输入验证码",id:"j_login_form_code",autocomplete:"off",onkeyup:"this.value=this.value.replace(/\\D/g,'')",onafterpaste:"this.value=this.value.replace(/\\D/g,'')",maxlength:"6"},domProps:{value:t.login_code},on:{input:function(e){e.target.composing||(t.login_code=e.target.value)}}}),t._v(" "),n("timerBtn",{ref:"timerbtn",staticClass:"code retainbl graytxt",attrs:{second:t.second,disabled:t.disabled},on:{run:t.sendCode}})],1)]),t._v(" "),n("p",[t._v("author2:"+t._s(t.author2))]),t._v(" "),n("div",{staticClass:"login_form_submit gray",attrs:{id:"j_login_form_submit"},on:{click:t.getlogin}},[t._v("立即登录")]),t._v(" "),n("P",[t._v("是否登录login:"+t._s(t.login))]),t._v(" "),n("div",{staticClass:"login_form_submit gray",attrs:{id:"j_login_form_submit"},on:{click:t.touserPage}},[t._v("to user")]),t._v(" "),n("div",{staticClass:"login_form_submit gray",attrs:{id:"j_login_form_submit"},on:{click:t.clearLogin}},[t._v("去除登录信息")])],1)},staticRenderFns:[]};var Pt,At=n("VU/8")($t,jt,!1,function(t){n("ehAX")},"data-v-a7f21aa8",null).exports,Ft=n("bOdI"),Ut=n.n(Ft),St={name:"yzcar",components:(Pt={},Ut()(Pt,w.Card.name,w.Card),Ut()(Pt,w.Checkbox.name,w.Checkbox),Ut()(Pt,w.SubmitBar.name,w.SubmitBar),Ut()(Pt,w.CheckboxGroup.name,w.CheckboxGroup),Pt),data:function(){return{checkedGoods:["1","2","3"],goods:[{id:"1",title:"进口香蕉",desc:"约250g，2根",price:200,num:1,thumb:"https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg"},{id:"2",title:"陕西蜜梨",desc:"约600g",price:690,num:1,thumb:"https://img.yzcdn.cn/public_files/2017/10/24/f6aabd6ac5521195e01e8e89ee9fc63f.jpeg"},{id:"3",title:"美国伽力果",desc:"约680g/3个",price:2680,num:1,thumb:"https://img.yzcdn.cn/public_files/2017/10/24/320454216bbe9e25c7651e1fa51b31fd.jpeg"}]}},computed:{submitBarText:function(){var t=this.checkedGoods.length;return"结算"+(t?"("+t+")":"")},totalPrice:function(){var t=this;return this.goods.reduce(function(e,n){return e+(-1!==t.checkedGoods.indexOf(n.id)?n.price:0)},0)}},methods:{formatPrice:function(t){return(t/100).toFixed(2)},onSubmit:function(){Object(w.Toast)("点击结算")}}},Et={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-checkbox-group",{staticClass:"card-goods",model:{value:t.checkedGoods,callback:function(e){t.checkedGoods=e},expression:"checkedGoods"}},t._l(t.goods,function(e){return n("van-checkbox",{key:e.id,staticClass:"card-goods__item",attrs:{name:e.id}},[n("van-card",{attrs:{title:e.title,desc:e.desc,num:e.num,price:t.formatPrice(e.price),thumb:e.thumb}})],1)})),t._v(" "),n("van-submit-bar",{attrs:{price:t.totalPrice,disabled:!t.checkedGoods.length,"button-text":t.submitBarText},on:{submit:t.onSubmit}})],1)},staticRenderFns:[]};var Nt,zt=n("VU/8")(St,Et,!1,function(t){n("yFvb")},"data-v-4eb79552",null).exports,It={name:"yzdetail",components:(Nt={},Ut()(Nt,w.Tag.name,w.Tag),Ut()(Nt,w.Col.name,w.Col),Ut()(Nt,w.Icon.name,w.Icon),Ut()(Nt,w.Cell.name,w.Cell),Ut()(Nt,w.CellGroup.name,w.CellGroup),Ut()(Nt,w.Swipe.name,w.Swipe),Ut()(Nt,w.SwipeItem.name,w.SwipeItem),Ut()(Nt,w.GoodsAction.name,w.GoodsAction),Ut()(Nt,w.GoodsActionBigBtn.name,w.GoodsActionBigBtn),Ut()(Nt,w.GoodsActionMiniBtn.name,w.GoodsActionMiniBtn),Nt),data:function(){return{goods:{title:"美国伽力果（约680g/3个）",price:2680,express:"免运费",remain:19,thumb:["https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg","https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg"]}}},methods:{formatPrice:function(){return"¥"+(this.goods.price/100).toFixed(2)},onClickCart:function(){this.$router.push("cart")},sorry:function(){Object(w.Toast)("暂无后续逻辑~")}}},Vt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"goods"},[n("van-swipe",{staticClass:"goods-swipe",attrs:{autoplay:3e3}},t._l(t.goods.thumb,function(t){return n("van-swipe-item",{key:t},[n("img",{attrs:{src:t}})])})),t._v(" "),n("van-cell-group",[n("van-cell",[n("div",{staticClass:"goods-title"},[t._v(t._s(t.goods.title))]),t._v(" "),n("div",{staticClass:"goods-price"},[t._v(t._s(t.formatPrice(t.goods.price)))])]),t._v(" "),n("van-cell",{staticClass:"goods-express"},[n("van-col",{attrs:{span:"10"}},[t._v("运费："+t._s(t.goods.express))]),t._v(" "),n("van-col",{attrs:{span:"14"}},[t._v("剩余："+t._s(t.goods.remain))])],1)],1),t._v(" "),n("van-cell-group",{staticClass:"goods-cell-group"},[n("van-cell",{attrs:{value:"进入店铺",icon:"shop","is-link":""},on:{click:t.sorry}},[n("template",{slot:"title"},[n("span",{staticClass:"van-cell-text"},[t._v("有赞的店")]),t._v(" "),n("van-tag",{attrs:{type:"danger"}},[t._v("官方")])],1)],2),t._v(" "),n("van-cell",{attrs:{title:"线下门店",icon:"location","is-link":""},on:{click:t.sorry}})],1),t._v(" "),n("van-cell-group",{staticClass:"goods-cell-group"},[n("van-cell",{attrs:{title:"查看商品详情","is-link":""},on:{click:t.sorry}})],1),t._v(" "),n("van-goods-action",[n("van-goods-action-mini-btn",{attrs:{icon:"chat"},on:{click:t.sorry}},[t._v("\n        客服\n      ")]),t._v(" "),n("van-goods-action-mini-btn",{attrs:{icon:"cart"},on:{click:t.onClickCart}},[t._v("\n        购物车\n      ")]),t._v(" "),n("van-goods-action-big-btn",{on:{click:t.sorry}},[t._v("\n        加入购物车\n      ")]),t._v(" "),n("van-goods-action-big-btn",{attrs:{primary:""},on:{click:t.sorry}},[t._v("\n        立即购买\n      ")])],1)],1)},staticRenderFns:[]};var Lt=n("VU/8")(It,Vt,!1,function(t){n("2Fr2")},null,null).exports;a.default.use(f.a);var Ot=new f.a({routes:[{path:"/index",name:"index",component:F},{path:"*",redirect:"/index"},{path:"/detail",name:"detail",component:T},{path:"/yzcar",name:"yzcar",component:zt,meta:{title:"有赞购物车"}},{path:"/yzdetail",name:"yzdetail",component:Lt,meta:{title:"有赞详细页"}},{path:"/user",name:"user",component:kt,meta:{login:!0}},{path:"/login",name:"login",component:At},{path:"/cart",name:"cart",component:bt,meta:{login:!0}},{path:"/result",name:"result",component:Q,children:[{path:"/result/result1",component:K},{path:"/result/result2",component:et}]}]}),Tt=Ot;Ot.beforeEach(function(t,e,n){var a=localStorage.getItem("isLogin"),i=t.meta&&t.meta.title;i&&(document.title=i),t.meta.login?a?n():n({path:"/login",query:{redirect:t.fullPath}}):n()});n("DL0H");var Rt=n("zL8q"),Ht=n.n(Rt),Bt=(n("tvR6"),n("8+8L")),Gt=n("mtWM"),Mt=n.n(Gt);n("CMvz");a.default.use(Ht.a),a.default.use(Bt.a),a.default.prototype.$axios=Mt.a,a.default.use(y.a),a.default.config.productionTip=!1,new a.default({el:"#app",router:Tt,render:function(t){return t(_)},template:"<App/>"})},caH3:function(t,e){},"dJd+":function(t,e){},ehAX:function(t,e){},i3Xc:function(t,e){},irse:function(t,e){},mgS3:function(t,e){},ogUj:function(t,e){},ohjg:function(t,e){},"qN+J":function(t,e){},tvR6:function(t,e){},uPZS:function(t,e){},xOgU:function(t,e){},yFvb:function(t,e){},"yqU/":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.d55cf7251a47b6a9169c.js.map