<template>
   <div>
   <el-form :model="userinfo" :rules="userRules" ref="loginForm" class="from">
      <el-form-item label="用户名" prop="username" class="username">
      <el-input v-model="userinfo.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password" class="pwd">
      <el-input v-model="userinfo.password"></el-input>
      </el-form-item>
      <el-form-item >
      <el-button  @click="login" type="primary" class="btn">登录</el-button>
      </el-form-item>
</el-form>
   </div>

  
</template>
<script>
import {mapActions,mapState} from "vuex";
import {user} from "../../config/UserRule";
export default {
   name: '',
   data() {
       return {
          userinfo:{
             username:"",
             password:""
          },
          userRules:user
       }
   },
   methods: {
      ...mapActions("user",{
        setlogin:"login",
        getuserinfo:"getUserinfo"
      }),
    async login(){
            // 获取用户信息
         const {username,password}=this.userinfo
        //判断页面是否输入符号规则
         await this.$refs["loginForm"].validate()
         // 发起请求
         await this.setlogin({username,password})
         // 存储用户信息
         await this.getuserinfo()  

         // 跳转页面
         this.$router.push("/home")
 
      }
   }
}
</script>
<style style='scss' scoped>
.from{
width: 300px;
height: 300px;
position:absolute;
left:45%;
top:35%;
margin-left:-100px;  
margin-top:-100px;   
}
.btn{
   margin-left:40%;
}
</style>
