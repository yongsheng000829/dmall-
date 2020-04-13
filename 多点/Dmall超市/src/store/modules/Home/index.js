import api from "../../../api/index";
const state={
    bannerlist:[],
    shoplist:[],
    shoptype:[]
}
const mutations={
    //轮播图数据
    setBannerlist(state,value){
        const current=new Date()*1
        state.bannerlist=value.filter(item=>{
        return current>=new Date(item.start_time)&&current<new Date(item.end_time)     
        })
    },
    // 首页商品列表数据
    setShoplist(state,value){
        if(state.shoplist.length===0){
            state.shoplist=value;
            return
        }
        state.shoplist=[...state.shoplist,...value]
    },
    // 商品分类数据
    setShoptype(state,value){
        state.shoptype=value
        // console.log(value)
    }
}
const actions={
    // 轮播图接口
    getBannerlist({commit}){
        api.getBanner().then(res=>{
            commit("setBannerlist",res.data.data)
        })

    },
    // 首页商品接口
  async getShoplist({commit},params){
      const res=await api.getShoplist(params)
            commit("setShoplist",res.data.data) 
    },
    // 商品分类接口
    getShoptype({commit}){
        api.getshoptype().then(res=>{
            const {code,data}=res.data;
            if(code===1){
                commit("setShoptype",data)

            }
            // console.log(res.data)
        })
    }
}
export default {
    // 若与全局的mutatios重名 就写了namespace
    namespaced:true,
    state,
    mutations,
    actions
}