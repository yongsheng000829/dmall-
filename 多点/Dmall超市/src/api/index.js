import Vue from "vue";
const files=require.context("./",false,/\.js$/);

const api=files.keys().filter(val=>!val.includes("index")).reduce((prev,item)=>{
    prev={
        ...prev,
        ...files(item).default
    }

    return prev
},{})
Vue.prototype.$http=api
export default api
