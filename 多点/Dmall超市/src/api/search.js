import request from "../utils/request";
export default{
    // 获取搜索内容
    getSearch:(params)=>request.get("/search",params),
}