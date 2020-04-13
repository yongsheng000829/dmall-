import request from "../utils/request";
export default{
    // 获取用户信息接口
    getUserinfo:()=>request.get("/user/getUserInfo"),
    // 添加购物车或者增加件数
    addcar:(data)=>request.post("/car/addCar",data),
    // 获取购物车商品
    getShop:(params)=>request.get("/car/getCar",params),
    // 删除购物车商品件数
    deletecar:(data)=>request.post("/car/removeCar",data),
    // 删除购物车商品
    deleteshop:(data)=>request.post("/car/removeShop",data),
    // 提交订单
    submitshop:(data)=>request.post("/submit/order",data),





}