import request from "../utils/request"
export default {
    // 登录请求
    getlogin:(data)=>request.post("/admin/login",data),
    // 用户身份信息请求
    getsuerinfo:()=>request.get("/admin/getUserInfo")

    
}