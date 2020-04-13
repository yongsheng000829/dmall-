<template>
   <div>
  <el-breadcrumb separator="/">
  <el-breadcrumb-item v-for="(item,index) in breadcrumbList" :key="index" :to="{ path:item.path }">{{item.title}}</el-breadcrumb-item>
</el-breadcrumb>
   </div>
</template>
<script>
export default {
   name: 'Breadcrumbbox',
   data() {
       return {
           breadcrumbList:[]
       }
   },
   watch:{
        '$route':{
            handler:'getbreadcrunb',
            immediate:true
        }
    },
   methods: {
       getbreadcrunb(val){
           this.breadcrumbList=val.matched.map(item=>({
               path:item.path,
               title:item.meta.title?item.meta.title:"全部"          
           }))        
       }
       
   },
}
</script>
<style style='scss' scoped>
</style>
