const express = require('express')
const router = express.Router()

//在这里挂在相应的路由
router.get('/get',(req,res)=>{
    //通过req.query获取客户端通过字符串发送到服务器的数据
    const query = req.query
    //调用res.send()方法向客户端响应处理的结果
    res.send({
        status:0,//0表示处理成功,1失败
        msg:'Get 请求成功',//描述状态
        data:query,//需要响应给客户端的数据
    })
})
router.post('/post',(req,res)=>{
    //通过req.body获取客户端通过字符串发送到服务器的数据
    const body = req.body
    //调用res.send()方法向客户端响应处理的结果
    res.send({
        status:0,//0表示处理成功,1失败
        msg:'post 请求成功',//描述状态
        data:body,//需要响应给客户端的数据
    })
})


module.exports = router