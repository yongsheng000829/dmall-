module.exports = {
    configureWebpack: {
        externals: {
            AMap: 'AMap'
          },
        devServer:{
        proxy:{
            "/api":{
                target:"http://127.0.0.1:7002/",
                pathRewrite:{
                    "^/api":""
                }
            },
            
        }
        
    }
    }
  }