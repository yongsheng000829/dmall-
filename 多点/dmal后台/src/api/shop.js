import request from "../utils/request"
export default {
    // 获取商品请求
    getallShop:()=>request.get("/shop/allShop"),
    // 获取商品分类
    getType:()=>request.get("/shop/getType"),
    // 获取子分类
    getChildType:()=>request.get("/shop/getCategory"),
    // 添加商品接口
    getAddShop:(data)=>request.post("/shop/addShop",data),
    // 删除商品接口
    getRemoveShop:(data)=>request.get("/shop/removeShop",data),
    // 添加商品分类
    getAddtype:(data)=>request.get("/shop/addType",data),
    // 添加商品子分类
    getAddChidtype:(data)=>request.get("/shop/addCategory",data),



}