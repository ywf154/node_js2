const express = require('express')
const app = express()

//导入路由模块
const router = require('./20.api_Ruouter')
//把路由模块注册到app上
app.use('/api',router)





//以下模板而已
app.post('/',(req,res)=>{res.send('home page')})
app.get('/user',(req,res)=>{ res.send('ok')})
app.listen(80,()=>{console.log('running')})