<template>
   <div class="addressload">
       <div class="logo">
           <img src="../../static/imgs/doodianLog.png" alt="">
       </div>
       <div class="gpslog">
           <img src="../../static/imgs/duodianDingwei.png" alt="">
       </div>
       <p class="textgps">正在定位</p>
       <p class="small"><span>高品质</span><span>低价格</span><span>好服务</span></p>
   </div>
</template>
<script>
import {Load,getAddress} from "../../utils/map";
export default {
   name: '',
   data() {
       return {
           a:""
       }
   },
  async created(){
       let AMap= await Load()
       try{
       let loadaction=await getAddress(AMap)
       localStorage.setItem("loadaction",JSON.stringify(loadaction))
        this.$router.push("/frist")
       }catch(error){
       this.$router.push("/setAddress")
       }
   },
//    async mounted(){
//     window.onLoad=function(){

//     var map = new AMap.Map('container', {
//     pitch:75, // 地图俯仰角度，有效范围 0 度- 83 度
//     viewMode:'3D' // 地图模式
//     });
//     }
//    }
}
</script>
<style style='scss' scoped>



</style>
