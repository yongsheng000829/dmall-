<template>
   <div>
       <input type="text" placeholder="请输入要搜索的商品内容" class="ipt" value="iptvalue" v-model="iptvalue" @keyup.enter="getsearch(iptvalue)">
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
</template>
<script>
import api from "../../api/search";
export default {
   name: 'Search',
   data() {
       return {
           iptvalue:"",
           getshoplist:[]
       }
   },
    methods: {
        // 搜索框回车事件  搜索内容
        async getsearch(search_key){
         const res=await  api.getSearch({search_key})
         this.getshoplist=res.data.data
        }
  },
   beforeRouteLeave (to, from, next) {
       if(to.path==="/frist/home"){
           to.meta.keeplive=false
       }
   }
}
</script>
<style style='scss' scoped>
 .ipt{
        width: 97%;
        height: 30px;
        border:1px solid #ccc;
        border-radius: 20px;
        background: #eee;
        outline: none;
        border:none;
        padding-left: 20px;
        /* color: #ddd; */
        margin: 5px 5px;
    }
</style>
