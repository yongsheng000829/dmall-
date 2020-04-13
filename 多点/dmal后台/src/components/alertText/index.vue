<template>
   <div>
         <el-dialog
         title="详情数据"
         :visible="open"
          width="70%"
          @close="$emit('Close')"
         >
         <p>商品名称:{{listData.name}}</p>
         <p>商品分类:{{listData.type_id}}</p>
         <p>商品主图:{{listData.cover}}</p>
         <p>商品图片:{{listData.pictures}}</p>
         <p>商品详情:{{listData.detail}}</p>
         <p>库存:{{listData.stock}}</p>
         <p>销量:{{listData.volume}}</p>
         <p>商品子分类:{{listData.category_id}}</p>
         <p>商品标签:{{listData.specs}}</p>
         <p>成本:{{listData.old_price}}</p>
         <p>售价:{{listData.price}}</p>
     <span slot="footer" class="dialog-footer">
    <el-button @click="$emit('Close')">取 消</el-button>
  </span>
</el-dialog>
   </div>
</template>
<script>
export default {
   name: 'alertText',
   data() {
       return {}
   },
   props:{
       open:{
           default:false,
           type:Boolean
       },
       listData:{
           default:()=>{},
           type:Object
       }
   },
   watch: {
       listData(val){
           if(val){
               return this.listData
           }else{
               return ''
           }
       }
   },
}
</script>
<style style='scss' scoped>
p{
    margin: 5px 0px;
}
</style>
