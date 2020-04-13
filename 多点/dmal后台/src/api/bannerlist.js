import request from "../utils/request"
export default {
    // 请求轮播图数据
    getbanner:()=>request.get("/home/banner"), 
    // 上传图片接口
    ipDateImage:(data)=>request.post("/upimage",data),
    // 添加轮播图接口
    addBanner:(data)=>request.post("/home/addBanner",data),
    // 编辑banner接口
    editBanner:(data)=>request.post("/home/editBanner",data),
    // 删除banner接口
    deleteBanner:(id)=>request.post("/home/delBanner",{id})

}