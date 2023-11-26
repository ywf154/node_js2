const express = require('express')
const app = express()


app.get('/',(req,res)=>{ res.send('home page')})
app.get('/user',(req,res)=>{res.send('user page')})

app.get('/user/home',(req,res)=>{
    //人为制造错误：
    throw new Error('服务器内部发生错误')
    res.send('user page')
})
//定义错误级别的中间件捕获整个项目异常错误，以防止程序的崩溃，并向控制台和客户端发送错误消息
//错误级别中间件的特点：
// 1它必须放在路由之后  2它有四个参数(err,req,res,next)
app.use((err,req,res,next)=>{
    console.log('发生错误'+ err.message)
    res.send('发生错误'+ err.message)
})

app.listen(80,()=>{console.log('running')})