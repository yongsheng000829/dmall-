import api from "../../api/index";
import {Encrypt} from "../../utils/crypto";
import asideConfig from "../../config/asideMenu";//侧边权限列表动态生成
const state={
    username:"",
    asideMenu:[]

}
const filterViews=function(name){
    return asideConfig.filter(item=>{
        return item.authority.includes(name)
    }).map(item=>{
        item.children=item.children.filter(val=>val.authority.includes(name))
        return item
    })
}
const mutations={
    // 用户身份信息
    setusername(state,value){
        state.username=value
        // 侧边列表的生成
        state.asideMenu=filterViews(state.username)
    }
}
const actions={
    async  login({commit},payload){
        const data=await api.getlogin(payload);
        window.localStorage.setItem("userinfo",Encrypt(data.data))
    },
    async getUserinfo({commit}){
      const res=await api.getsuerinfo()
      window.localStorage.setItem("username",res.data.identity.name)
      commit("setusername",res.data.identity.name)
    }
}
export default {
    namespaced:true,
    state,
    actions,
    mutations

}