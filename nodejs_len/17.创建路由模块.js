//这是路由模块
const express = require('express')
const router =  express.Router()
router.get('/user',(req,res)=>{res.send('user get')})
router.get('/user',(req,res)=>{res.send('user post')})
module.exports =router  //向外导出路由对象