<template>
   <div class="pay_box">

 
        
       <div class="shopping" v-if="open">
           <dl class="shop_list" v-for="(item,index) in shoplist" :key="index">
               <span class="radio">
               <input type="checkbox" name="" id="" :checked="item.checked" ref="dancheck" @click="clicheced(item.shopdata.id)">
               </span>
               <dt>
                   <img :src="item.shopdata.cover" alt="">
               </dt>
               <dd>
                <span class="titleName">{{item.shopdata.name}}</span>
                <b class="titlePrice">￥{{item.shopdata.price}}</b>
                <span class="remove" @click="removeshop(item.shopdata.id)">删除</span>
                <p class="comted"><span class="subtraction" @click="comnum('subtraction',item.shopid,item.count)">-</span>{{item.count}}<span class="add" @click="comnum('add',item.shopid)">+</span></p>
               </dd>
           </dl>
       </div>
       <div v-else class="kong">
           <p> 购物车没有商品</p>
           <van-button type="warning" @click="$router.push('/frist/home')">去逛逛吧</van-button>
       </div>
       <div class="pay">
           <van-submit-bar
           class="bar"
           :price="allprice*100"
           button-text="提交订单"
           @submit="onSubmit"
           >
           <van-checkbox v-model="checked" @click="allcheck">全选</van-checkbox>
           </van-submit-bar>
       </div>
   </div>
</template>
<script>
import {mapState,mapActions,mapMutations} from "vuex"
import {throttle} from "../../../utils/fang";
export default {
   name: '',
   data() {
       return {
           checked:false,
           dancheck:false,
           Allprice:0,
           isshow:false
       }
   },
   computed:{
       ...mapState("ShopIndex",["shoplist","allprice"]),
       open(){
           return this.shoplist.length===0?false:true
       }
   },
   methods:{
       ...mapActions("ShopIndex",{
           getShop:"getShop",
        //    comNum:"comNum",
           Comprice:"Comprice",
           getremoveCar:"getremoveCar",
           Addcar:"Addcar",
           deletecar:"deletecar"
       }),
       ...mapMutations("ShopIndex",{
           Danprice:"Danprice",
           Allcheck:"Allcheck"
       }),
    //    计算加加减减
       comnum:throttle(function(type,id,count){
        const uid=window.localStorage.getItem("uid")
       if(type==="add"){//加加
          this.Addcar(id)
        }
        if(type==="subtraction"){//减减

        if(count<=1){
            this.getremoveCar(id)
            return
        }
        this.deletecar(id)
        }
        this.Comprice()
       },500),
    //    提交订单
       onSubmit(){

       },
    //    单选
    clicheced(id){
        this.Danprice(id)
        this.Comprice()
    },
    //    全选价格
       allcheck(){
        this.Allcheck(this.checked)
        this.Comprice()
       },
    //  删除购物车商品
     removeshop(id){
      this.getremoveCar(id)
       }
   },
    created(){
        this.comnum()
    //    获取购物车商品
       const uid=window.localStorage.getItem("uid")
       this.getShop(uid)
   }
}
</script>
<style style='scss' scoped>
.pay_box{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #eee;
}
.shopping{
    flex: 1;
    width: 100%;
    overflow: auto;
}
.pay{
    width: 100%;
    height: 60px;
}
.bar{
    position:fixed;
    bottom:50px;
}
.shop_list{
    width: 100%;
    height: 100px;
    background: #fff;
    display: flex;
}
.shop_list dt{
    width: 30%;
    height: 100%;
}
.shop_list dt img{
    max-width: 100%;
    max-height: 100%;
}
.shop_list dd{
    width: 60%;
    height: 100%;
    position: relative;
}
.comted{
    width: 100px;
    height: 20px;
    line-height: 18px;
    /* background: lawngreen; */
    position: absolute;
    top:70px;
    right:10px;
}
.subtraction,.add{
    display: inline-block;
    text-align: center;
    line-height: 18px;
    font-size: 20px;
    width: 20px;
    height: 20px;
    border:1px solid #ccc;
    border-radius: 50%;
    margin: 0px 8px;
}
.radio{
    width: 10%;
    text-align: center;
    margin-top:38px;  
}
.titleName{
    width: 100%;
    display: inline-block;
    margin-top: 10px;
    margin-left: 7px;
}
.titlePrice{
    color: orangered;
    font-size: 16px;
    margin-left: 7px;
}
.remove{
    width: 40px;
    height: 20px;
    background: red;
    color: #fff;
    border-radius: 7px;
    display: inline-block;
    text-align: center;
    line-height: 20px;
    margin-left: 58px;
}
.kong{
    padding-top:50%;
    margin: 0 auto;
}
</style>
