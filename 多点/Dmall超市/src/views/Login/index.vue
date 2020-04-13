<template>
   <div>
       <p class="title">手机号登录</p>
       <p class="tishi">手机号</p>
       <input type="text" class="ipt" v-model="phone">
       <div>
           
       <button  :class="{
           btn:true,
           active:disabel

       }" @click="getCode">获取验证码<input/></button>           
       </div>

       <Alertnum 
       :open="open"
       :phone="phone"
       :time="time"
       @getnum="getnum"
       @setiner="setiner"
       />

   </div>
</template>
<script>
import {mapActions} from "vuex"
import api from "../../api/login";
export default {
   name: '',
   data() {
       return {
           phone:"",
           open:false,
           time:60,
           value:""
       }
   },
   computed:{
      disabel(){
          return /^1[1356789]\d{9}$/.test(this.phone)
      },
   },
   methods:{
       setiner(){
           this.open=false
       },
    //   打开弹窗
  async  getCode(){
        this.open=true
        setInterval(()=>{
            this.time--;
            if(this.time<=0){
                this.time=0
            }
            return this.time     
        },1000)
        // 获取验证码
         const res=await api.getnum({phone:this.phone});
      },
    //   登录关闭弹窗  拿到验证码
     async getnum(code){
            this.open=false
            this.value=code
            // 登录
            const res=await api.getLogin({phone:this.phone,checkcode:this.value});
            if(res.data.code===1){
                window.localStorage.setItem("logintoken",res.data.data.token)
                this.getuserinfo()
                this.$router.push({path:"/addressLoad"})//跳定位页面
                return
            }
      },
    //    获取用户身份信息
       ...mapActions("ShopIndex",{
           getuserinfo:"getuserinfo"
       }),
   },

}
</script>
<style style='scss' scoped>
.title{
    padding-left: 25px;
    width: 100%;
    height: 40px;
    text-align: left;
    font-size: 30px;
    margin-top: 70px;
}
.tishi{
    width: 100%;
    height: 10px;
    padding: 25px;
    color: #666;
    text-align: left;
}
.ipt{
    display:inline-block;
    width: 90%;
    margin-left: 20px;
    height: 20px;
    border: none;
    border-bottom: 1px solid #ccc;
}
.btn{
    width: 90%;
    text-align: center;
    margin-left: 20px;
    height: 35px;
    display: inline-block;
    margin-top: 50px;
    color: #fff;
    border-radius: 20px;
    background: #999;
    border:none;
    outline:0 none !important;
}
.btn input{
    opacity: 0;
    width: 0;
    height: 0;
}
.btn.active{
    background: #fd552d;
}
</style>
