<template>
   <div>
       <Breadcrumbbox/>
         <el-button type="success" @click="openBannerDialog('新增banner')">添加Banner</el-button>
         <BannerDialog 
         :open="dialogOption.isOpen" 
         :title="dialogOption.title"
         :initBannerData="dialogOption.initBannerData"
         @close="dialogClose"
         @submitBanner="submitBanner"
         ref="ODailog"
         />
    <el-table
      :data="bannerdata"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="id"
      label="序号"
      width="140">
    </el-table-column>

     <el-table-column
      prop="user_id"
      label="用户ID"
      >
    </el-table-column>

    <el-table-column
      prop="active_name"
      label="备注"
      >
    </el-table-column>

    <el-table-column
      prop="image"
      label="图片"
      width=200
      >
      <template slot-scope="scope">
          <div class="images">
            <img :src="scope.row.image">
            </div>
        </template>>
    </el-table-column>

    <el-table-column
      prop="start_time"
      label="创建时间"
      >
    </el-table-column>

      <el-table-column
      prop="end_time"
      label="结束时间"
      >
    </el-table-column>

    <el-table-column
      fixed="right"
      label="操作"
      width="120">
      <template slot-scope="scope">
         <el-button type="primary" icon="el-icon-edit" circle @click="openBannerDialog('编辑banner',scope.row)"></el-button>
        <el-button type="danger" icon="el-icon-delete" circle @click="removeBanner(scope.row.id)"></el-button>
      </template>
    </el-table-column>
  </el-table>
   </div>
</template>
<script>
import api from "../../../api/bannerlist";
import {mapActions,mapState} from "vuex"
export default {
   name: '',
   data() {
       return {
           dialogOption:{
           isOpen:false,
           title:"",
           initBannerData:null           
           }
       }
   },
   computed: {
       ...mapState("bannerlist",["bannerdata"])
   },
   methods: {
        ...mapActions("bannerlist",{
           getBanner:"getBannerlist"
       }),
    //    子组件传参得来的事件关闭弹框
       dialogClose(){
           this.dialogOption.isOpen=false
           this.$refs["ODailog"].$refs["addbanner"].resetFields()
      },
    //    创建新bannerDialog  打开弹框
       openBannerDialog(title,data){
           this.dialogOption.isOpen=true//控制当前弹框的开关
           this.dialogOption.title=title//传当前标题
           this.dialogOption.initBannerData=data?data:null//编辑的时候传当前编辑的数据
       },
      //  接收到子组件的自定义事件    ODailog是自定义事件传过来的this
       submitBanner(ODailog){
         if(this.dialogOption.title.includes("新增")){
          //  发请求添加banner图片 
          api.addBanner(ODailog.formData).then(res=>{
          //  关闭弹框
           this.dialogClose()
          //  更新视图
           this.getBanner()
           })

         }else{
          //  发编辑请求
           api.editBanner(ODailog.formData).then(res=>{
          //  关闭弹框
           this.dialogClose()
          //  更新视图
           this.getBanner()
           })
         }

       },
      //  删除banner接口
       removeBanner(id){
         api.deleteBanner(id).then(res=>{
          //  调用消息提示框  传提示信息和状态
           this.$message({
             message:res.msg,
             type:"warning"
           })
            //  更新视图
           this.getBanner()
         })
       }
   },
   created() {
       this.getBanner()
       
   },
}
</script>
<style style='scss'>
.images{
    width: 180px;
    height: 85px;
    text-align: center;
}
.images img{
    max-width: 100%;
    max-height: 100%;
}
</style>
