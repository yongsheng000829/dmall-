<template>
   <div>
       <Breadcrumbbox/>
         <div>
  <el-form    label-width="100px" :rules="rule" :model="formData" ref="setlist">
    <!-- 商品名称 -->
  <el-form-item label="商品名称" prop="name">
    <el-input v-model="formData.name"></el-input>
  </el-form-item>
  <!-- 商品分类 -->
  <el-form-item label="商品分类" prop="type_id">
    <el-dropdown @command="handleCommand">
  <span class="el-dropdown-link">
    商品分类<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item v-for="(item,index) in shoptype" :key="index" :command="item.id">{{item.title}}</el-dropdown-item>
  </el-dropdown-menu>
  </el-dropdown>
  </el-form-item>
    <!-- 商品子分类 -->
  <el-form-item label="商品子分类" prop="category_id">
    <el-dropdown  @command="handleclick">
  <span class="el-dropdown-link">
    商品分类<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item v-for="(item,index) in childrenall" :key="index" :command="item.parent_id">{{item.name}}</el-dropdown-item>
  </el-dropdown-menu>
  </el-dropdown>
  </el-form-item>
   <!-- 售价 -->
  <el-form-item label="售价" prop="price">
    <el-input v-model="formData.price"></el-input>
  </el-form-item>
  <!-- 成本 -->
  <el-form-item label="成本" prop="old_price">
    <el-input v-model="formData.old_price"></el-input>
  </el-form-item>
  <!-- 库存 -->
  <el-form-item label="库存" prop="stock">
    <el-input v-model="formData.stock"></el-input>
  </el-form-item>
   <!-- 销量 -->
  <el-form-item label="销量" prop="volume">
    <el-input v-model="formData.volume"></el-input>
  </el-form-item>
   <!-- 商品标签 -->
   <el-form-item label="商品标签" prop="specs">
    <el-input v-model="formData.specs"></el-input>
  </el-form-item>
    <!-- 商品详情 -->
   <el-form-item label="商品详情">
   <div ref="editor"></div>
  </el-form-item>
    <!-- 商品图片 -->
  <el-form-item label="商品图片" prop="cover">
  <el-upload
  class="avatar-uploader"
  action="#"
  :http-request="fileChange1"
  list-type="image/*"
  :show-file-list="false">
  <div class="images">
  <img v-if="formData.cover" :src="formData.cover" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
  </div>
  </el-upload>
  </el-form-item>
  <!-- 商品副图 -->
    <el-form-item label="商品副图" prop="pictures">
  <el-upload
  class="avatar-uploader"
  action="#"
  :http-request="fileChange2"
  list-type="image/*"
  :show-file-list="false">
  <div class="images">
  <img v-if="formData.pictures" :src="formData.pictures" class="avatar">
  
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>

  </div>
  </el-upload>
  </el-form-item>
  <el-form-item >
  <el-button type="success" @click="submit">提交</el-button>
  </el-form-item>
  </el-form>

   </div>
   </div>
</template>
<script>
import wangEdirot from "wangeditor";
import {mapState,mapActions} from "vuex"
import api from "../../../api/bannerlist";
import { Avatar } from 'element-ui';
export default {
   name: '',
   data() {
       return {
        formData:{
         name:"",//商品名称
         type_id:"", //商品分类
         cover:"",//	商品主图 图片地址字符串
         pictures:"",//商品图片 图片地址数组字符串
         detail:"",//	商品详情
         price:"",//售价
         stock:"",//库存
         volume:"",//	销量
         category_id:"",//商品子分类
         specs:"",//	商品标签数组字符串
         old_price:""//成本
         },
        rule:{
        name:[
        {required:true,message:"请输入商品名称",trigger:"blur"}
        ],
        type_id:[
        {required:true,message:"请选择商品分类",trigger:"blur"}
        ],
        cover:[
        {required:true,message:"请上传商品主图",trigger:"blur"}
        ],
        pictures:[
        {required:true,message:"请上传商品副图",trigger:"blur"}
        ],
        price:[
        {required:true,message:"请输入售价",trigger:"blur"}
        ],
        old_price:[
        {required:true,message:"请输入成本",trigger:"blur"}
        ],
        stock:[
        {required:true,message:"请输入库存",trigger:"blur"}
        ],
        volume:[
        {required:true,message:"请输入销量",trigger:"blur"}
        ],
        category_id:[
        {required:true,message:"请选择商品子分类",trigger:"blur"}
        ],
        specs:[
        {required:true,message:"请输入商品标签数组字符串",trigger:"blur"}
        ]
        },
        ED:null 
       }
   },
   computed:{
       ...mapState("shoplist",["shoptype","childrenall"]),   
   },
   methods: {
          ...mapActions("shoplist",{
           getaddshop:"getaddshop"
      }),
  async   fileChange1(ev){
       const files=ev.file;//图片对象
       let OFromdata=new FormData();//实例这个方法
       OFromdata.append("file",files)
    const res=await  api.ipDateImage(OFromdata)
       const host=process.env.VUE_APP_TEST_SERVER
          this.formData.cover=host + res.data.filename
     },
 async     fileChange2(ev){
       const files=ev.file;//图片对象
       let OFromdata=new FormData();//实例这个方法
       OFromdata.append("file",files)
      const res=await api.ipDateImage(OFromdata)
       const host=process.env.VUE_APP_TEST_SERVER
          this.formData.pictures=host + res.data.filename
     },
    ...mapActions("shoplist",{
           gettypes:"gettype",
           getchildType:"getchildType",
           getaddshop:"getaddshop"
      }),
      // 选择商品类型下拉框
      handleCommand(type_id){
        this.formData.type_id=type_id
      },
      // 选择商品子类型下拉框
      handleclick(category_id){
        this.formData.category_id=category_id
        // console.log(category_id)
      },
      // 提交表单
      submit(){
        this.$refs["setlist"].validate(async (res)=>{
        this.formData.detail=this.ED.txt.html().replace(/<[^>]+>/g,"")//获取富文本编译内容
          if(res){ 
             await   this.getaddshop(this.formData)
          }

        })
        
      }
   },
    created() {
       this.gettypes()
       this.getchildType()
       this.listData=this.$route.query

   },
   mounted() {
    this.ED=new wangEdirot(this.$refs["editor"]);
    this.ED.create()
   },
}
</script>
<style style='scss' scoped>
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;

  }
  .images{
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
.avatar {
    width: 100%;
    height: 100%;
    display: inline-block;
}
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    border: 1px dashed #d9d9d9;
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .editor{
    width: 300px;
    height: 300px;
  }
</style><style style='scss' scoped>
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;

  }
  .images{
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
.avatar {
    width: 100%;
    height: 100%;
    display: inline-block;
}
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    border: 1px dashed #d9d9d9;
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .editor{
    width: 300px;
    height: 300px;
  }
</style>
