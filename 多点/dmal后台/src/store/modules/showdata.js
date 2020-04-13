import api from "../../api/show";

const state={
    allshowdata:{
        shopdata:[],
        uvupdata:[],
        newuser:[],
        viewsdata:[]
    }
}
const actions={
    getshowData({commit},payload){
        api.getshowdata({time:Date.now()}).then(res=>{
            commit("setshowdata",{
                data:res.data,
                statename:payload

            })
        })
    }
}
const mutations={
    setshowdata(state,value){
        state.allshowdata[value.statename]=value.data
    }
}
export default {
    namespaced:true,
    state,
    actions,
    mutations

}