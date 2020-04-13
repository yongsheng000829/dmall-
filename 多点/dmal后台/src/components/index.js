import Vue from "vue";
const files=require.context("./",true,/index.vue$/);
files.keys().forEach(val=>{
    const Com=files(val).default;
    Vue.component(Com.name,Com)
})
