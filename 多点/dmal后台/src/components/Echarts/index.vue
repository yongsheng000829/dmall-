<template>
   <div>
       <div class="echardata" ref="linedata" :style="{width:typeof width==='string'?width:width+'px',height:height+'px',...styles}"></div>       
   </div>
</template>
<script>
import echarts from "echarts";
export default {
   name: 'Echarts',
   props:{
       width:{
           default:400
       },
       height:{
           type:Number,
           default:300
       },
       styles:{
           type:Object
       },
       seriesname:{
           type:String
       },
       series:{
            type:Object
        }

   },
   data() {
       return {
        Echarts:null,
       }
   },
    mounted() {
        // 获取图标ecahrts
       this.Echarts=echarts.init(this.$refs["linedata"]);
       this.Echarts.setOption(this.seriesData())
   },
      watch:{
       series:{
           handler(val){
            this.Echarts.setOption(this.seriesData())
           },
           deep:true
       }
   },
   methods: {
            seriesData(){
            return {
                title: {
                    text: this.$attrs.title,
                    subtext: this.$attrs.subtext
                },
                xAxis: {
                    type: 'category',
                    data: this.series[this.seriesname].map(item=>item.time)
                },
                yAxis: {
                    type: 'value'  //根据value值自动计算
                },
                series: [{
                    data: this.series[this.seriesname].map(item=>item.num),
                    type: this.$attrs.type
                }]
            }
        }
   },
}
</script>
<style style='scss' scoped>
.echardata{
    display: inline-block;
    border:0.5px solid #ccc;
}
</style>
