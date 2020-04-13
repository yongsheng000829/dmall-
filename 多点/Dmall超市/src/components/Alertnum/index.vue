<template>
   <div class="dialong" v-show="open">
     <div class="alert">
       <h2>请输入验证码</h2>
       <p><b>{{length}}</b>位验证密码以发送到<b>{{phone}}</b></p>
       <ul class="ul">
         <li v-for="(val,i) in length" :key="val" :class="{
           li:true,
           active:i<code.length
         }">{{code[i]}}</li>
       </ul>
       <input type="tel" autocomplete="off" autofocus="off" :maxlength="length" v-model="code" class="input" ref="input"/>
       <p>{{time}}秒后会重新发送</p>
         <button  class="btn" @click="getlogin" v-if="!isshow">登录</button> 
         <button  class="btn1" v-if="isshow">验证码已失效</button> 

     </div>
   </div>
</template>
<script>
export default {
   name: 'Alertnum',
   data() {
       return {
         code:"",
         isshow:false
       }
   },
   props:{
     open:{
       default:false,
       type:Boolean
     },
     length:{
       default:6,
       type:Number
     },
     phone:{
       default:"",
       type:String
     },
     time:{
       default:60,
       type:Number
     }
   },
   watch:{
     open(val){
       if(val){
         this.$refs.input.focus()
       }
     },
     time(){
       if(this.time===0){
         this.isshow=true
         setTimeout(()=>{
         if(this.isshow){
           this.$emit("setiner")
           return
         }
         },1000)

         return
       }
     }
   },
   methods: {
     //  登录
     getlogin(){
         this.$emit("getnum",this.code)
     }    
   },
}
</script>
<style style='scss' scoped>
.btn{
    width: 60%;
    text-align: center;
    margin-left: 20%;
    height: 35px;
    display: inline-block;
    margin-top: 10px;
    color: #fff;
    border-radius: 20px;
    background: #fd552d;
    border:none;
    outline:0 none !important;
}
.btn1{
    width: 60%;
    text-align: center;
    margin-left: 20%;
    height: 35px;
    display: inline-block;
    margin-top: 10px;
    color: #fff;
    border-radius: 20px;
    background: #666;
    border:none;
    outline:0 none !important;
}
.input{
  opacity: 0;

}
.ul{
  margin-top: 10px;
  width: 100%;
  height: 40px;
}
.li{
  width: 35px;
  height: 35px;
  border:1px solid #666;
  display: inline-block;
  text-align: center;
  margin: 2.5px;
  line-height: 35px;
  font-size: 18px;
  font-weight: bold;
  vertical-align: top;
}
.li.active{
  border:2px solid red;
}
.dialong{
  width: 100%;
  height: 100%;
  position: fixed;
  top:0;
  left: 0;
  background: rgb(0, 0, 0,.5);
  z-index: 100;
}
.alert{
  width: 80%;
  height: 35%;
  background: #fff;
  border-radius: 10px;
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%,-50%);
  padding-left: 8px;
}
</style>
