const express = require('express')
const app = express()

const mw1 = (req,res,next)=>{
console.log('调用了局部生效的中间件mw1')
    next()
}
const mw2 = (req,res,next)=>{
    console.log('调用了局部生效的中间件mw2')
    next()
}
//           ↓  只有下面含有wm1才能被调用
//          ___
app.get('/',mw1,(req,res)=>{ res.send('home page')})

app.get('/user',mw1,mw2,(req,res)=>{res.send('user page')})
//同时使用多个局部生效的中间件   mw1,mw2,~~~和[mw1,mw2,~~~]是等同的
app.get('/user/home',[mw1,mw2],(req,res)=>{res.send('user page')})

app.listen(80,()=>{console.log('running')})