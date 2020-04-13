<template>
   <div class="typebox">
       <input type="text" placeholder="请输入要搜索的商品内容" class="ipt">
       <div class="shoptype">
       <div class="left">
           <span v-for="(val,index) in ShopTypData" :key="index" :class="index===indexof?'active':''" @click="cliindex(index,val.children)">{{val.title}}</span>

       </div>
       <div class="right">
           <div class="top">
           <span v-for="(val,index) in children" :key="index" >{{val.name}}</span>
           </div>
           
           <div class="btm">
        <Shoplist 
        v-for="(val,index) in getshoplist" 
        :key="index"
        :cover="val.cover"
        :name="val.name"
        :volume="val.volume"
        :stock="val.stock"
        :price="val.price"
        :id="val.id"
        />    
           </div>
       </div>

       </div>

   </div>
</template>
<script>
import {mapActions} from "vuex"
export default {
   name: '',
   data() {
    //    console.log(this.$store)
       return {
           indexof:0,
           children:"",
           params:{
           pageid:0,
           limit:5        
      }
       }
   },
   computed:{
       ShopTypData(){
           return this.$store.state.homeIndex.shoptype
       },
       getshoplist(){
           return this.$store.state.homeIndex.shoplist
       }
   },
   methods:{
       ...mapActions("homeIndex",{
           getShoptype:"getShoptype",
           getShoplist:"getShoplist"
       }),
       cliindex(index,children){
           this.indexof=index
           this.children=children
       }
   },
   created(){
       this.getShoptype();
       this.getShoplist(this.params)
   }

}
</script>
<style style='scss' scoped>

</style>
