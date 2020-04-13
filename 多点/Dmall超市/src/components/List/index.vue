<template>
       <dl class="libox" @click="clicktext(id)">
           <dd class="imges">
               <img :src="cover" alt="">
           </dd>
           <dt class="dantext">
               <h5>{{name}}</h5>
               <span>累计{{volume}}万份/已拼{{stock}}份</span><br/>
               <span>自营</span><br/>
               <b>￥{{price}}</b>
               <span class="iconfont icon-gouwuchekong" @click.stop="goshop(id)"></span>
           </dt>
       </dl>  
</template>
<script>
import {mapState,mapActions} from "vuex"
export default {
   name: 'Shoplist',
   data() {
       return {
    
       }
   },
   props:{
    cover:String,
    name:String,
    volume:Number,
    stock:Number,
    price:Number,
    id:Number
   },
   methods:{
        ...mapActions("ShopIndex",{
       Addcar:"Addcar"
       }),
       //跳详情
       clicktext(id){
        // this.$router.push({name:'getcar',params:{id}})
           this.$router.push({path:'/getcar',query:{id}})
       },
      // 加入购物车
       goshop(id){
         this.Addcar(id)
       },


   },


}
</script>
<style style='scss' scoped>
.libox{
    width: 100%;
    overflow: auto;
    display: flex;
    border-bottom: 0.5px solid #ccc;

  
 
}
.imges{
    width: 40%;
    height: 100%;
        
}
.imges img{
    width: 100%;
    height: 100%;
}
.dantext{
    width: 60%;
    height: 100%;
}
h5{
    font-size: 12px;
}
b{
    color: orangered;
    font-size: 16px;
}
span{
    display: inline-block;
    font-size: 10px;
    color: #bbb;
    margin-bottom: 5px;
}
span:nth-child(4){
    display: inline-block;
    width: 40px;
    height: 20px;
    background: orangered;
    color: #fff;
    border-radius: 9px;
    font-size: 12px;
    text-align: center;
    line-height: 20px;
    margin-bottom: 15px;
}
.dantext{
    position: relative;
}
span:nth-child(7){
    width: 20px;
    height: 20px;
    background: red;
    color: #fff;
    position: absolute;
    right: 20px;
    border-radius: 50%;
    font-size: 12px;
    text-align: center;
    line-height: 20px;
}

</style>
