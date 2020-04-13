<template>
   <div>
       <Breadcrumbbox/>
        <el-table
    :data="allshop"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="id"
      label="序号"
      width="50">
    </el-table-column>
    <el-table-column  
      prop="type_id"
      label="商品编号"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="商品名称"
      width="150">
    </el-table-column>
    <el-table-column
      prop="old_price"
      label="成本"
     >
     </el-table-column>
    <el-table-column
      prop="price"
      label="售价"
     >
    </el-table-column>
        <el-table-column
      prop="price"
      label="状态"
     >
    </el-table-column>
    <el-table-column
      prop="stock"
      label="库存数量"
   >
    </el-table-column>
    <el-table-column
      prop="volume"
      label="累计销售"
     >
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="110px">
      <template slot-scope="scope">
        <el-button  type="text" size="small" @click="ClickText(scope.row)">查看详情</el-button>
        <el-button type="text" size="small" @click="deleteShop(scope.row.id)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <alertText
  :open="open"
  :listData="listData"
  @Close="Close"
  />
   </div>
</template>
<script>
import {mapActions,mapState} from "vuex"
export default {
   name: '',
   data() {
       return {
         open:false,
         listData:{}
       }
   },
   computed: {
       ...mapState("shoplist",["allshop"])
   },
   methods: {
       ...mapActions("shoplist",{
           getshopsll:"getshopsll",
           getdeleteshop:"getdeleteshop"
       }),
      //  删除商品
     async  deleteShop(id){
      await   this.getdeleteshop(id)
         this.getshopsll()
            this.$message({
             message:"删除成功",
             type:"warning"
           })
       },
      //  查看详情
      ClickText(data){
        this.open=true 
        this.listData=data 
      },
      Close(){
        this.open=false 
      }
   },
   created() {
       this.getshopsll()
   },
}
</script>
<style style='scss' scoped>
</style>
