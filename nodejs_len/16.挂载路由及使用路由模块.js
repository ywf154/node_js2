const express = require('express')
const app = express()
//3导入路由模块
const router = require('./17.创建路由模块.js')
//使用路由模块app.use(router)   //use()作用：注册全局中间件
app.use(router)
app.use('/api',router)  //给路由模块加一个路由前缀（相当于再加一级目录或者文件夹）
//1挂载路由，会越来越多，不方便
app.get('/',(req,res)=>{res.send('get request')})
app.post('/',(req,res)=>{res.send('post request')})
//2使用路由模块

app.listen(80,()=>{console.log('express server running at http://127.0.0.1')})