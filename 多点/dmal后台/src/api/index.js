import Vue from "vue"
const files=require.context("./",false,/\.js$/);
let api=files.keys().filter(item=>!item.includes("index")).reduce((prev,item)=>{
    prev={
        ...prev,
        ...files(item).default
    }
    return prev
},{})
Vue.prototype.$http=api
export default api
