<template>
   <div>
         <el-dialog
         :title="type"
         :visible="open"
          width="70%"
          @close="$emit('Close')"
         >
    <el-input v-model="ipt" value="ipt"> </el-input>
     <span slot="footer" class="dialog-footer">
    <el-button @click="$emit('Close')">取消</el-button>
    <el-button @click="add">添加分类</el-button>
  </span>
</el-dialog>
   </div>
</template>
<script>
import api from "../../api/shop"
import {mapActions} from "vuex"

export default {
   name: 'Addtype',
   data() {
       return {
           ipt:""
       }
   },
   props:{
       open:{
           default:false,
           type:Boolean
       },
       type:{
           default:"添加一级分类",
           type:String
       },
       shop_id:{
           default:"",
           type:String
       }
   },
   methods: {
       ...mapActions("shoplist",{
        addShopType:"addShopType",
        addShopChildType:"addShopChildType"
       }),
    //    添加分类
     async  add(){
           // 添加商品分类
           if(this.type=='添加一级分类'){
            const res=await api.getAddtype({type_name:this.ipt})
            const {code,msg}=res;
            if(code===1){
             this.$message({
             message:msg,
             type:"success"
             })
             this.Close()
            }
            return
            }  
           if(this.type=='添加二级分类'){
               const res=await api.getAddChidtype({type_id:this.shop_id,category_name:this.ipt})
               const {code,msg}=res
               if(code===1){
                   this.$message({
                       message:msg,
                       type:"success"
                   })
               }
               this.Close()
               return
             
           }
       },
       Close(){
           this.$emit("Close")
       }
   },
}
</script>
<style style='scss' scoped>

</style>
