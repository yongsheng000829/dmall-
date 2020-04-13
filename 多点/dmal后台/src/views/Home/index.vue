<template>
   
<el-container class="container">
  <el-header class="header">欢迎<b>{{getuser}}</b>登录<el-button type="danger" @click="back">退出</el-button></el-header>
  <el-container>
    <el-aside width="200px" class="aside">
              <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      v-for="(item,index) in getaside" :key="index"
      >
        <el-submenu index="index">

        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{item.title}}</span>
        </template>

        <el-menu-item-group v-for="(val,index) in item.children" :key="index">
          <router-link :to="val.to"><el-menu-item index="index">{{val.title}}</el-menu-item></router-link>
        </el-menu-item-group>
        </el-submenu>
        </el-menu>


    </el-aside>
    <el-main class="main">
        <router-view/>   
    </el-main>
  </el-container>
</el-container>
</template>
<script>
import {Decrypt} from "../../utils/crypto";
import {mapActions,mapState} from "vuex"
export default {
   name: '',
   data() {
       return {}
   },
   methods: {
     ...mapActions("user",{
       getuserinfo:"getUserinfo"

     }),
    //  退出账户
     back(){
       window.localStorage.clear("userinfo");
       this.$router.push("/login")

     }
   },
   computed: {
    // 获取用户身份
     getuser(){
       return this.$store.state.user.username
     },
    //  从vuex中拿到动态生成的侧边列表
     getaside(){
       return this.$store.state.user.asideMenu
     }
    //  ...mapState("user",{
    //   asideMenu:"asideMenu"
    //  })
   },
   created() {
     this.getuserinfo()
     this.b=1
     window.a=this
   },
}
</script>
<style style='scss' scoped>
.container{
    width: 100%;
    height: 100%;
}
.header{
    background-color: #B3C0D1;
    color: #333;
    text-align: left;
    line-height: 60px;
  }
    .aside {
    background-color: #D3DCE6;
    color: #333;
    /* text-align: center;
    line-height: 200px; */
  }
    .main {
    background-color: #E9EEF3;
    color: #333;
    /* text-align: center;
    line-height: 160px; */
  }
</style>
