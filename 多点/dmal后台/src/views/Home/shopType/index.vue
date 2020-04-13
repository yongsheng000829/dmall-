<template>
   <div>
       <Breadcrumbbox/>
       <div style="float:right">
      <el-button size="mini" type="success" @click="addtype('添加一级分类')">添加一级分类</el-button>
       </div>
       <Addtype
       :open="open"
       :type="type" 
       :shop_id="shop_id"
       @Close="Close"
       />


    <el-table
    :data="shoptype"
    style="width: 100%"
    row-key="id"
    border
    lazy
    @expand-change="showChildren"
   >
    <el-table-column type="expand">


    <template>
    <el-table
    :data="childtype"
    style="width: 100%"
    row-key="id"
    border
    >

    <el-table-column
      prop="id"
      label="ID"
      width="380">
    </el-table-column>

    <el-table-column
      prop="name"
      label="二级分类"
      width="180">
    </el-table-column>

    <el-table-column
      label="操作">
      <template>
        <el-button
          size="mini"
        >编辑</el-button>
        <el-button
          size="mini"
          type="danger"
        >删除</el-button>
      </template>

        </el-table-column>
        </el-table>
        </template>
        </el-table-column>




    <el-table-column
      prop="id"
      label="ID"
      width="380">
    </el-table-column>
    <el-table-column
      prop="title"
      label="一级分类"
      width="180">
    </el-table-column>
    <el-table-column
      label="操作">
       <template slot-scope="scope">
        <el-button
          size="mini"
        >编辑</el-button>
        <el-button
          size="mini"
          type="danger"
        >删除</el-button>
        
        <el-button size="mini" type="success" @click="addtype('添加二级分类',scope.row.id)">添加二级分类</el-button>
     
      </template>
    </el-table-column>
     </el-table>
   

   </div>
</template>
<script>
import {mapState,mapActions,mapMutations} from "vuex"
export default {
   name: '',
   data() {
       return {
         open:false,
         type:"",
         shop_id:""
       }
   },
   computed:{
       ...mapState("shoplist",["shoptype","childtype"])

   },
   methods: {
       ...mapActions("shoplist",{
           gettypes:"gettype",
           getchildType:"getchildType"
       }),  
       ...mapMutations("shoplist",{
           filterChildren:"filterChildren"
       }),
       showChildren(row){
           this.filterChildren(row)
       },
      //  添加分类
       addtype(type,id){
         this.open=true;
         this.type=type
         this.shop_id=id
       },
       Close(){
         this.open=false;
       }
   },
   created() {
       this.gettypes()
       this.getchildType()
   },
}
</script>
<style style='scss' scoped>
</style>
