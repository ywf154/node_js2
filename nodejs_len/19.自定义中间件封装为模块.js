const qs = require('querystring')

const body_parser =((req,res,next)=>{
    //定义中间件具体的业务逻辑
    //定义一个str字符串，专门用来存储客户端发送过来的请求体数据
    let str = ''
    //监听req的data事件
    req.on('data',(chunk)=>{str+=chunk})
    //监听req的end事件
    req.on('end',()=>{
        const body = qs.parse(str)
        req.body = body

        next()
    })

    
})
module.exports = body_parser