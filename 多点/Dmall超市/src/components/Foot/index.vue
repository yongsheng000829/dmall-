<template>
   <div class="footer">
       <router-link v-for="(val,index) in tip" :key="index" :to="val.path">
           <span :class="{
                'iconfont':true,
                [val.icon]:true
            }"></span>
           <span>{{val.title}}</span>
           </router-link>
   </div>
</template>
<script>
import router,{routes} from "../../router/index";
export default { 
   name: 'Foot',
   data() {

       return {
           tip:[{
               path:"/frist/home",
               title:"首页",
               icon:"icon-shouye"
           },{
               path:"/frist/fitfiy",
               title:"分类",
               icon:"icon-leimupinleifenleileibie"
           },{
               path:"/frist/shop",
               title:"购物车",
               icon:"icon-gouwuchekong"
           },{
               path:"/frist/mine",
               title:"我的",
               icon:"icon-wode"
           }]
       }
   },
//    mounted:{
//         footnav(){
//            return  routes.filter(val=>val.path==="/frist").map(item=>{
//                  item.children.map(val=>({
//                     path:val.path,
//                     ...val.meta
//                 }))
//                 // this.tip=tips
//               console.log(tips)
//             })
            
//         }
//    },

}
</script>
<style style='scss' scoped>

</style>
