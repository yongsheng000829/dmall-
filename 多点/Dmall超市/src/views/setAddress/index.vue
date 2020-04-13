<template>
   <div>
       查询地址：<input type="text" name="" id="" class="iptadd" v-model.lazy="address">
    <ul>
             <li v-for="(item,index) in tiplist" :key="index" @click="cliadd(item)">
            <h2>{{item.name}}</h2>
            <p>{{item.district}}</p>
            </li>
    </ul>
   </div>
</template>
<script>
import {getMapSerch,Load} from "../../utils/map";
export default {
   name: '',
   data() {
       return {
           address:"",
           tiplist:[]
       }
   },
   watch:{
      async address(val){
           let AMap=await Load()
           getMapSerch(AMap,val).then(res=>{
               this.tiplist=res.tips
           })
       }

   },
   methods:{
       cliadd(val){
           val.formattedAddress=val.name
           window.localStorage.setItem("loadaction",JSON.stringify(val))
           this.$router.push("/frist")
       }

   }
}
</script>
<style style='scss' scoped>
.iptadd{
    width: 80%;
    height:30px;
    display: inline-block;
    border-radius: 10px;
    border:none;
    border:1px solid #000;
}
</style>
