const http = require('http')
const server = http.createServer()
server.on('request',(req,res)=>{  //1获取请求的url
    const url = req.url
    let content ='<h1>404 Not found</h1>'  //设置默认的响应内容
    if(url==='/'||url==='/index.htmp'){  //判断用户请求的是否为'/'或者'/index,html'首页
        content = '<h1>首页</h1>'  
    }else if(url==='/about.html'){  //判断用户请求的是否为关于页面
        content = '<h1>关于页面</h1>'
    }
    res.setHeader('Content-Type','text/htmp;charset=utf-8')  //设置content—Type响应头防止中文乱码
    res.end(content)  //使用end方法把内容响应给客户端
})
server.listen(80,()=>{
    console.log('running')
})