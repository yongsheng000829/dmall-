<template>
 
   <div class="fristbox">
       <div class="wrap">
    <keep-alive>
    <router-view v-if="$route.meta.keeplive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keeplive"/>
       </div>
       <div class="foot">
           <Foot/>
       </div>
     
   </div>
  
</template>
<script>
export default {
   name: '',
   data() {
       return {
        

       }
   }
}
</script>
<style style='scss' scoped>

</style>
