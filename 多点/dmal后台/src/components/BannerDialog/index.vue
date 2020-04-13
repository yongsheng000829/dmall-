<template>
   <div>
   <el-dialog
  :visible="open"
  :title="title"
  @close="$emit('close')"
    width="50%"
  >
    <el-form :rules="rule" :model="formData" ref="addbanner">
        <!-- 标题 -->
        <el-form-item label="活动名称" prop="active_name">
        <el-input  placeholder="请输入名称" v-model="formData.active_name"></el-input>
        </el-form-item>        
        <!-- 用户Id -->
        <el-form-item label="活动链接" prop="url">
        <el-input placeholder="请输入连接" v-model="formData.url"></el-input>
        </el-form-item>        
        <!-- 上传Banner -->
        <el-form-item label="活动图片" prop="image">
        <el-upload
        class="avatar-uploader"
        action="#"
        :http-request="fileChange"
        list-type="image/*"
        :show-file-list="false">
        <div class="images">
         <img v-if="formData.image" :src="formData.image" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </div>
        
       </el-upload>
       </el-form-item>
      <!-- 开始时间 -->
      <el-form-item label="开始时间" required>
    <div class="block">
    <el-form-item  prop="start_time">
    <el-date-picker
      v-model="formData.start_time"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
    </el-form-item>
    </div>
    </el-form-item>
       <!-- 结束时间 -->
      <el-form-item label="结束时间" prop="end_time">
    <div class="block">
    <el-form-item prop="end_time">
    <el-date-picker
      v-model="formData.end_time"
      align="right"
      type="date"
      placeholder="选择日期"
      >
    </el-date-picker>
    </el-form-item>
    </div>
    </el-form-item>


    <!-- 提交信息 -->
      <el-button @click="addbannerdata">提交</el-button>
  </el-form>

 
</el-dialog>
   </div>
</template>
<script>
import api from "../../api/bannerlist"
import moment from "moment"
export default {
   name: 'BannerDialog',
   data() {
       return {
        formData:{
            image:"",
            start_time:"",
            end_time:"",
            user_id:Math.random(10,1000)*100,
            active_name:"",
            url:""
        },
        rule:{
        image:[
        {required:true,message:"请上传活动图片",trigger:"blur"}
        ],
         start_time:[
        {required:true,message:"请选择活动开始时间",trigger:"blur"}
        ],
        end_time:[
        {required:true,message:"请选择活动结束时间",trigger:"blur"}
        ],
         user_id:Math.random(10,1000)*100,
         active_name:[
        {required:true,message:"请填写活动名称",trigger:"blur"}
        ],
         url:[
        {required:true,message:"请填写活动连接",trigger:"blur"}
        ],
        } 
       }
   },
   watch:{
     open(val){
      //  val为真  打开弹框的时候
       if(val){
        //  this.initBannerData是点击编辑的时候的一行数据
         if(this.initBannerData){
           this.formData={...this.initBannerData}
         }else{
          this.formData={
            image:"",
            start_time:"",
            end_time:"",
            user_id:Math.random(10,1000)*100,
            active_name:"",
            url:""
           }
         }
       }

     }
   },
   props:{
       open:{
           default:false,
           type:Boolean
       },
       title:{
           default:"弹窗提示信息",
           type:String
       },
       initBannerData:{
         default:()=>{},
         type:Object
       }
   },
   methods: {
       fileChange(ev){
           const files=ev.file;//图片对象
           let OFromdata=new FormData()
           OFromdata.append("file",files)//Fromdata上面有一个append
           const host=process.env.VUE_APP_TEST_SERVER
           api.ipDateImage(OFromdata).then(res=>{
                   this.formData.image=host + res.data.filename
           })

       },
       addbannerdata(){
        //  转换时间格式
            this.formData.start_time=moment(this.formData.start_time).format(
               "YYYY-MM-DD hh:mm:ss"
           )
            this.formData.end_time=moment(this.formData.end_time).format(
               "YYYY-MM-DD hh:mm:ss"
           )
          //  通过表单规格验证  获取到当前表单的节点  下面的方法 validate  如果为真 就调用自定义事件 并且传参数过去
           this.$refs["addbanner"].validate((res)=>{
               if(res){
                   this.$emit("submitBanner",this)
               } 
           }) 
       }
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

  
</style>
