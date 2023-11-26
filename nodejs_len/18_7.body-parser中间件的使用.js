//安装：npm i body-parser
const express = require('express')
const app = express()
//导入解析表单的中间件body-paser
//const paser = require('body-paser')
//querystring内置的专门用于处理查询字符串，parse()函数可以把查询的字符串解析成对象的格式
const qs = require('querystring')
//这是解析表单的中间件
// app.use((req,res,next)=>{
//     //定义中间件具体的业务逻辑
//     //定义一个str字符串，专门用来存储客户端发送过来的请求体数据
//     let str = ''
//     //监听req的data事件
//     req.on('data',(chunk)=>{str+=chunk})
//     //监听req的end事件
//     req.on('end',()=>{
//         const body = qs.parse(str)
//         req.body = body

//         next()
//     })
// })


//使用
// app.use(paser.urlencoded({extended:false}))
// app.post('/',(req,res)=>{
//     res.send('home page')
// })

app.post('/user',(req,res)=>{
    res.send(body)
})




app.listen(80,()=>{console.log('running')})