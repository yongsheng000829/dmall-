import CryptoJS from "crypto-js"
const keys="wanzi";//密钥
// 加密
export const Encrypt=(data)=>{
    return CryptoJS.AES.encrypt(JSON.stringify(data),keys).toString();

}
// 解密
export const Decrypt=(data)=>{
    const bytes=CryptoJS.AES.decrypt(data, keys);//解密出来字符串
    // 解密出来的不是一个字符串  一个bytes形式
    // 所有尝试的去执行它去解密
    // 错误就返回false
    try{
        return  JSON.parse(bytes.toString(CryptoJS.enc.Utf8))//把解密处理的字符串转回来
    }catch{
        return false
    }

}