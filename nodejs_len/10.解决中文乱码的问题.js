const http = require('http')
const { url } = require('inspector')
const server = http.createServer()
server.on('request',(req,res)=>{
    // 定义一个字符串，包含包含中文的内容
    const str = `您请求的url地址为${req,url}，请求的medthon类型为${req.method}`
    res.setHeader('Content-Type','text/html;charset=utf-8')
    // 固定写法，需要记住
    res.end(str)
})
server.listen(80,()=>{
    console.log('Server running at http://127.0.0.1')
    
})