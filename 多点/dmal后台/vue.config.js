module.exports={
    configureWebpack:{
        devServer:{
            proxy:{
                "/api":{
                    target:"http://127.0.0.1:7002/",
                    pathRewrite:{
                        "^/api":""
                    }
                }
            },
            before(app) {
                app.get('/api/getshowdata', (req, res) => {
                    // console.log(req);

                    const day = 7;
                    const data = [];
                    for (let i = 0; i < day; i++) {
                        let times = i * 86400000;
                        const num = req.query.time* 1 - times;
                        const timeData = new Date(num).toLocaleDateString();
                        data.push({
                            time: timeData,
                            num: Math.ceil(Math.random() * 30)
                        })
                    }
                    res.send({
                        code: 1,
                        status: 200,
                        msg: 'success',
                        data
                    });
                })
            }
        }
    }
}