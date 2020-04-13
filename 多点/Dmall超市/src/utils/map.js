
import {key} from "../config/map";

// AMap方法挂载到document上面
export function Load(){
 
  var url = `https://webapi.amap.com/maps?v=1.4.15&key=${key}&callback=onLoad`;
  var script = document.createElement('script');
  return new Promise((resolve,reject)=>{
    window.onLoad  = function(e){
        if(AMap){
            resolve(AMap)
        }else{
            reject(e)
        }
  }
  script.src = url;
  document.head.appendChild(script);
  })
}
// 拿到load定位插件
export function getAddress(AMap,config={
    // 是否使用高精度定位，默认：true
    enableHighAccuracy: true,
    // 设置定位超时时间，默认：无穷大
    timeout: 10000,
  }){
    return new Promise((resolve,reject)=>{

        AMap.plugin('AMap.Geolocation', function() {
            const geolocation = new AMap.Geolocation(config)
            geolocation.getCurrentPosition()
            AMap.event.addListener(geolocation, 'complete', onComplete)
            AMap.event.addListener(geolocation, 'error', onError)
          
            function onComplete (data) {
                resolve(data)
              // data是具体的定位信息
            }
            function onError (data) {
              // console.log(data)
                reject(data)
              // 定位出错
            }
          })
    

    })
    
}
// 搜索文字查找地址
export function getMapSerch(AMap,keyword,city="北京"){
  return new Promise((resolve,reject)=>{
    AMap.plugin('AMap.Autocomplete', function(){
      // 实例化Autocomplete
      var autoOptions = {
        //city 限定城市，默认全国
        city:city
      }
      var autoComplete= new AMap.Autocomplete(autoOptions);
      autoComplete.search(keyword, function(status, result) {
        // 搜索成功时，result即是对应的匹配数据
        if(status==="complete"){
          // 搜索成功
          resolve(result)
        }else{
          // 搜索失败
          reject(result)
        }
      })
    })
  })
}
    
