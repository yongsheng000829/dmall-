import api from "../../../api/shop"
const state={
    userinfoID:"",
    shoplist:[],
    allprice:0
}
const mutations={
    // 设置用户信息
    setUserinfo(state,value){
        state.userinfoID=value.uid
        window.localStorage.setItem("uid",state.userinfoID)
    },
    // 设置购物车数据
    setShopdata(state,value){
        state.shoplist=value.map(item=>{
            const target=state.shoplist.find(val=>val.id===item.id)
            item.checked=target?target.checked:false
            return item
        })
    },
    // 单选
    Danprice(state,value){
        const a=state.shoplist.find(val=>val.shopid==value)
        a.checked=!a.checked
    },
    // 全选
    Allcheck(state,value){
        state.shoplist.forEach(item=>{
            item.checked=!value
        })
    }
}
const actions={
    // 获取用户信息
   async getuserinfo({commit}){
       const res=await api.getUserinfo();
       commit("setUserinfo",res.data.data)
    },   
    // 获取购物车商品
    async getShop({commit},user_id){
        const res=await api.getShop({user_id});
        const {code,data}=res.data
        if(code===1){
            commit("setShopdata",data)
        }
    },
    // 删除购物车商品件数
    async deletecar({commit,dispatch},shop_id){
        const user_id=window.localStorage.getItem("uid")
        const res=await api.deletecar({user_id,shop_id});
        dispatch("getShop",user_id)
    },
    // 添加购物车或者增加件数
        async Addcar({commit,dispatch},shop_id){  
            const user_id=window.localStorage.getItem("uid")
            const res=await api.addcar({user_id,shop_id})
            dispatch("getShop",user_id)

    }, 
    //删除购物车商品
    async getremoveCar({commit,dispatch},shop_id){
        const user_id=window.localStorage.getItem("uid")
        const res=await api.deleteshop({user_id,shop_id});
        dispatch("getShop",user_id)
    },
    // 计算总价
    Comprice(){
        state.allprice=0
        state.shoplist.map(item=>{
            if(item.checked)
        state.allprice+=item.count*item.shopdata.price
    })
   }

}
export default {
    namespaced:true,
    state,
    mutations,
    actions
}