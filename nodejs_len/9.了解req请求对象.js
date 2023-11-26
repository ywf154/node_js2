const { log } = require('console')
const http = require('http')
const server = http.createServer()
server.on('request',req=>{
    const url =req.url  //req是请求对象，包含了与客户端相关的数据和属性
    const method = req.method  //req.method是客户端请求的method类型
    const str = `Your request url is ${url},and request method is ${method}`
    console,log(str)
    res.end(str)    //调用end方法，向客户端相应一些内容
})
                    
server.listen(80,()=>{
    console.log('Server running at http://127.0.0.1')
})