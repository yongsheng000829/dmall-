<template>
   <div ref="container" class="bscroll">
       <div>
       <slot name="default"></slot>
       </div>
       <div class="loding" v-if="uploading"><slot name="uploading"></slot></div>
   </div>
</template>
<script>
import Bscroll from "better-scroll";
export default {
   name: 'MyBscroll',
   props:{
       uploading:{
           default:false,
           type:Boolean
       },
       probeType:{
           default:0,
           type:Number
       },
       scrollY:{
           default:true,
           type:Boolean
       },
       scrollX:{
           default:false,
           type:Boolean
       },
       startX:{
           default:0,
           type:Number
       },
        startY:{
           default:0,
           type:Number
       },
       click:{
           default:false,
           type:Boolean
       },
       pullUpLoad:{
           default:false,
           type:[Boolean,Object]
       },
       pullDownRefresh:{
           default:false,
           type:[Boolean,Object]          
       },
       pullingUp:{
           default:()=>{},
           type:Function
       },
       scroll:{
           default:()=>{},
           type:Function
       } 
   },
   data() {
       return {
           BS:null
       }
   },
   mounted(){
    //    const container=this.$refs["container"]
    //    this.BS=new Bscroll(container)
    // 当Dom更新完之后调用
       this.$nextTick(()=>{
           this.initBscroll()
       })   
   },
   methods:{
       initBscroll(){//带_是一种约定规范  不希望外部使用
           //是否存在  不存在就返回
           if(!this.$refs["container"]){
               return
           }
            //    存在就实例
             this.BS=new Bscroll(this.$refs["container"],{
                 probeType:this.probeType,
                 scrollY:this.scrollY,
                 scrollX:this.scrollX,
                 startX:this.startX,
                 startY:this.startY,
                 freeScroll:this.scrollY&&this.scrollX,
                 pullUpLoad:this.pullUpLoad,
                 pullDownRefresh:this.pullDownRefresh,
                 click:this.click
             })
            //  若开启上拉刷新 再绑定事件
             if(this.pullDownRefresh){
                 this.BS.on("pullingDown",async ()=>{
                    //  await this.$emit("pullingDown")
                    await this.pullingDown()
                     this.$nextTick(()=>{
                     this.BS.refresh()//重新计算高度
                     this.BS.finishPullDown()//告诉它数据已经加载
                     })                   
                 })
             }
            //  若开启下拉加载             
             if(this.pullUpLoad){
                 this.BS.on("pullingUp",async ()=>{
                    //  await this.$emit("pullingUp")
                     await this.pullingUp()//等待数据  当dom加载完毕
                     this.$nextTick(()=>{
                     this.BS.refresh()//重新计算高度
                     this.BS.finishPullUp()//告诉它数据已经加载
                     })
                 })
             }
             if(this.scroll){
                 this.BS.on("scroll",()=>{
                     this.scroll({
                         y:this.BS.y,
                         c:this.BS.x
                     })
                 })
             }
       },
            refresh(){
                 this.BS&&this.BS.refresh()
            },
            scrollTo(Option){
                 this.BS&&this.BS.scrollTo(Option)
            }
   }
}
</script>
<style style='scss' scoped>
.bscroll{
    width: 100%;
    height: 100%;
}
</style>
