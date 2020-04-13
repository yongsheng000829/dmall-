import api from "../../api/shop"; 
import {$message} from "../../config/element.config"
const state={
    allshop:[],
    shoptype:[],
    childtype:[],
    childrenall:[],//所有的二级

}
const mutations={
    setShoplist(state,value){
      state.allshop=value
    },
    setShoptype(state,value){
      state.shoptype=value
    },
    setChildtype(state,value){
        state.childrenall=value
    },
    filterChildren(state,value){
        state.childtype=state.childrenall.filter(val=>val.parent_id===value.id)
    }
}
const actions={
    // 获取商品列表
    async  getshopsll({commit}){
      const res=await api.getallShop();
      const {code,data}=res;
      if(code===1){
      commit("setShoplist",data)
      return
      }
    },
    // 获取商品分类
    async gettype({commit}){
        const res=await api.getType();
        const {code,data}=res;
        if(code===1){
        commit("setShoptype",data)
        return
        }
    },
    // 获取子分类
    async getchildType({commit}){
        const res=await api.getChildType();
        const {code,data}=res;
        if(code===1){
        commit("setChildtype",data)
        return
        }
    },
    // 添加商品接口
    async getaddshop({commit},payload){
        const res=await api.getAddShop(payload);
        const {code,data,msg}=res;
        if(code===1){
          $message.success(msg);
        }   
    },
    // 删除商品接口
    async getdeleteshop({commit},payload){
        const res=await api.getRemoveShop({id:payload});
        console.log(res)
    },
}
export default {
    namespaced:true,
    state,
    mutations,
    actions
}