import request from "../utils/request";
export default{
    // 获取验证码
    getnum:(data)=>request.post("/user/checkCode",data),
    // 登录接口
    getLogin:(data)=>request.post("/user/login",data),

}