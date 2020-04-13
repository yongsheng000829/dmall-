<template>
   <div class="lun">
       <ul class="ul" v-for="(item,index) in lundata" :key="index">
           <li>
               <p class="imgs"><img :src="item.url" alt=""></p>       
               <span>{{item.title}}</span>
           </li>
       </ul>
   </div>
</template>
<script>
export default {
   name: 'Lun',
   data() {
       return {
           lundata:[{
               url:"http://img0.imgtn.bdimg.com/it/u=3563436975,982440577&fm=26&gp=0.jpg",
               title:"蔬菜每日鲜"
           },{
               url:"http://img2.imgtn.bdimg.com/it/u=1487274956,1967046378&fm=26&gp=0.jpg",
               title:"肉蛋禽"
           },{
               url:"http://img4.imgtn.bdimg.com/it/u=1362786995,1511430767&fm=26&gp=0.jpg",
               title:"母婴天地"
           },{
               url:"http://img0.imgtn.bdimg.com/it/u=2034414192,1237685646&fm=26&gp=0.jpg",
               title:"进店必买"
           },{
               url:"http://img3.imgtn.bdimg.com/it/u=1806984987,1199042862&fm=11&gp=0.jpg",
               title:"美通卡"
           },{
               url:"http://img4.imgtn.bdimg.com/it/u=3115953180,3717277610&fm=26&gp=0.jpg",
               title:"早晚市"
           },{
               url:"http://img1.imgtn.bdimg.com/it/u=1949336550,2189266063&fm=11&gp=0.jpg",
               title:"品牌会"
           },{
               url:"http://img2.imgtn.bdimg.com/it/u=3248229760,4263145604&fm=26&gp=0.jpg",
               title:"领卷中心"
           },{
               url:"http://img4.imgtn.bdimg.com/it/u=2010454217,3050864199&fm=11&gp=0.jpg",
               title:"支付优惠"
           },{
               url:"http://img5.imgtn.bdimg.com/it/u=373438763,881173116&fm=26&gp=0.jpg",
               title:"直采品牌"
           }]
       }
   },
}
</script>
<style style='scss' scoped>
</style>
