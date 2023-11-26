//1导模块
const express = require('express')  
//2创建web服务器
const app = express()  
//4监听用户的get求情和post请求，并向客户端响应具体的内容
app.get('/user',(req,res)=>{
    //调用express提供的res.send方法向客户端响应一个JSON对象
    res.send({name:'张三',age:12,gender:'男'})
})
app.post('/user',(req,res)=>{
    res.send('请求成功')  //res.send方法向客户端响应一个文本字符串
})
app.get('/',(req,res)=>{
    //通过req.query可以获取客户端发送过来的查询参数
        //注意：默认情况下req.query是一个空对象
    console.log(req.query)
    res.send(req.query)
})
app.get('/user/:id/:username',(req,res)=>{
        //:后面是动态匹配的参数。比如http://127.0.0.1/user/1则ID就是1
    //req.params是动态匹配到的url参数，默认也是空对象
        //如http://127.0.0.1/user/12/zhangsan获得的结果为：
            // {"id": "12",
            //  "username": "zhangsan"}
    console.log(req.params)
    res.send(req.params)
})

//3启动web服务器
app.listen(80,()=>{  
    console.log('express server running at http://127.0.0.1')
})
