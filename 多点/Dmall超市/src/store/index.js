import Vue from 'vue';
import Vuex from 'vuex';
import homeIndex from "./modules/Home/";
import ShopIndex from "./modules/Shop/"
// const getModules=function(){
//   const modules=require.context("./modules",true,/\.js$/)
//   modules.keys().reduce((prev,item)=>{
//    const path=item.replace(/^\.\//,"").replace(/.js$/,"").replace(/\/([a-z])/g,($0,$1)=>$1.toUpperCase())
//    prev[path]=modules(item).default;
//   },{})
// }
// getModules()

Vue.use(Vuex);

// console.log(homeIndex)
const store=new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules:{
    homeIndex,ShopIndex
  }
});
window.store=store
export default store
