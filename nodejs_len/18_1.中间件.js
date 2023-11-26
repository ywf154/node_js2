const express = require('express')
const app = express()
// //定义一个简单的中间件mw
// const mw = function(req,res,next){
//     console.log('这是一个简单的中间件')  //当发起get请求时会打印这句话
//     next()  //next()必须要有，不能不能调用下一个。不算中间件
// }
// // 将mw注册为全局生效的中间件
// app.use(mw)  //只要有app.use(mw)用到了中间件，则就是全局生效的中间件，客户端发起的任何请求到达服务器后都会触发中间件
// //如何简化上面2个步骤：
app.use(function(req,res,next){
    console.log('这是一个简单的中间件') 
    next()  
})

app.get('/',(req,res)=>{
    console.log('调用了/这个路由')
    res.send('Home Page.')
})

app.get('/user',(req,res)=>{
    console.log('调用了/user这个路由')
    res.send('User Page.')
})

app.listen(80,()=>{
    console.log('running')
})