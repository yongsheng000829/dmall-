import request from "../utils/request"
export default {
    // echers请求
    getshowdata(params){
        return request.get('/getshowdata',params);
    }    
}