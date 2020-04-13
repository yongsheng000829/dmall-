<template>
   <div>
       <Breadcrumbbox/>
       <div class="ecat">
       <Echarts v-for="(item,index) in showdataPage" 
       :key="index"
       :title="item.title"
       :subtext="item.subtext"
       :type="item.type"
       :seriesname="item.data"
       :series="allshowdata"
      
       />
       </div>
      
   </div>
</template>
<script>
import {mapActions,mapState} from "vuex"
import showdataPage from "../../../config/showdata";
export default {
   name: '',
   data() {
       return {  
           showdataPage   
       }
   },
   computed: {
    allshowdata(){
        return this.$store.state.showdata.allshowdata
    }
    //    ...mapState("showdata",['allshowdata'])
   },
   methods: {
       ...mapActions("showdata",{
           getshowData:"getshowData"
       })
       
   },
    created() {
        this.getshowData('shopdata') 
        this.getshowData('uvupdata')  
        this.getshowData('newuser')  
        this.getshowData('viewsdata')  
   }
}
</script>
<style style='scss' scoped>
.ecat{
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
}

</style>
