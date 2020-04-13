import request from "../utils/request";
export default{
    // 获取首页轮播图片
    getBanner:()=>request.get("/home/banner"),
    // 获取列表数据
    getShoplist:(params)=>{
        return request.get("/home/shop",params)
    },
    // 商品分类
    getshoptype:()=>request.get("/shop/shopType"),
    // 跳详情数据
    getcar:()=>request.get("/car/getCar")




}