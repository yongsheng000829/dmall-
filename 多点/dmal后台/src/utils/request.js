import axios from "axios";
import router from "../router/index";
import {$message} from "../config/element.config";
import {Decrypt} from "../utils/crypto";

const baseURL=process.env.NODE_ENV === 'production' ? '' : '/api'
const request=axios.create({
    baseURL
})
// 添加请求拦截器
request.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    const userinfo=window.localStorage.getItem("userinfo");
    return {
      ...config,
       headers:{
         ...config.headers,
         Authorization:userinfo?Decrypt(userinfo).token:null

    }
  }
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
request.interceptors.response.use(function (data) {
    // 对响应数据做点什么
    return data.data;
  }, function (error) {
      switch(error.response.status){
          case 404:
          $message.error("接口走丢了");
          router.push("/404")
          break;
          case 401:
          $message.error("你可能未登录，请重新登录");
          break;
          case 403:
          $message.error("您没有权限访问");
          break;
          case 500:
          $message.error("服务器报错");
          break;
          case 406:
          $message.error("您的参数不合法");
          break;
          case 400:
          $message.error("发出的请求有错误，服务器没有进行新建或修改数据的操作");
          break;          
          default:
          $message.error(error.response.data.msg)
      }
    // 对响应错误做点什么
    return Promise.reject(error);
  });
export default{
    get(url,params={}){
        return request.get(url,{params})
    },
    post(url,data={}){
        return request.post(url,data)
    }
}
