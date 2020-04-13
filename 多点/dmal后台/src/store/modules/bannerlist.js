import api from "../../api/bannerlist";

const state={
    bannerdata:[]
}
const actions={
    // 获取轮播列表数据
   getBannerlist({commit}){
       api.getbanner().then(res=>{
        commit("setBannerlist",res.data)
       })    
    }
}
const mutations={
    // 设置轮播列表数据
    setBannerlist(state,value){
     state.bannerdata=value
    }

}
export default {
    namespaced:true,
    state,
    actions,
    mutations
}