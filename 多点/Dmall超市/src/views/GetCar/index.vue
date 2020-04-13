<template>
   <div class="car">
       <div class="getcar">
           <div class="imges">
               <img :src="getshoplist.cover" alt="">
               <div class="price_box">
                   <p>￥{{getshoplist.price}}</p>
                   <span>累计{{getshoplist.volume}}万份/已拼{{getshoplist.stock}}份</span>
               </div>
           </div>
           <div class="text">
               {{getshoplist.name}}
           </div>

       </div>
       <div class="footcar">
       <van-goods-action>
       <van-goods-action-icon icon="wap-home-o" text="首页" dot @click="$router.push('/frist/home')"/>
       <van-goods-action-icon icon="cart-o" text="购物车" :badge="shoplist.length" @click="$router.push('/frist/shop')"/>
       <van-goods-action-button type="warning" text="加入购物车" @click.stop="goshop(getshoplist.id)"/>
       <van-goods-action-button type="danger" text="立即购买" />
       </van-goods-action>
       </div>
   </div>
</template>
<script>
import {mapActions,mapState} from "vuex";
import api from "../../api/frist";
export default {
   name: '',
   data() {
       return {
           carid:this.$route.query.id,
           num:0
       }
   },
   created(){
    //    console.log(this.getshoplist)
   },
    computed: {   
    ...mapState("ShopIndex",["shoplist"]),
       //拿到商品数据
    getshoplist(){
           return this.$store.state.homeIndex.shoplist.find(val=>val.id===this.carid)
    }
  },
    methods: {
    ...mapActions("homeIndex",{ 
        getShoplist:"getShoplist"
         }),
    ...mapActions("ShopIndex",{
       Addcar:"Addcar"
       }),
      // 加入购物车
       goshop(id){
         this.Addcar(id)
       },
  },
}
</script>
<style style='scss' scoped>
.car{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.getcar{
    width: 100%;
    flex: 1;
    overflow: auto;
}
.footcar{
    width: 100%;
    height: 50px;
}
.imges{
    width: 100%;
    height: 200px;
    text-align: center; 
    position: relative;
}
.price_box{
    width: 100%;
    height: 40px;
    background: orangered;
    position: absolute;
    bottom:0;
    left: 0;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
}
.price_box p{
    text-align: left;
    font-weight: bold;
    font-size: 18px;
    color: #fff;
    margin-left: 5px;
}
.price_box span{
    display: inline-block;
    width: 100%;
    text-align: left;
    font-size: 10px;
    color: #fff;
    margin-left: 5px;
}
.imges img{
    max-width: 80%;
    max-height: 80%;
}
.text{
    width: 100%;
    height: 50px;
    margin-top: 10px;
    font-size: 16px;
}
</style>
