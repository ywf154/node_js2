const express = require('express')
const app = express()
//通过express.json()中间件来解析表单中的JSON格式的数据
app.use(express.json())
//通过express.urlencoded中间件来解析表单中的url-encoded格式的数据
app.use(express.urlencoded({extended:false}))

app.post('/',(req,res)=>{

    res.send('home page')
})

app.post('/book',(req,res)=>{
    console.log(req.body)
    res.send('book page')
})

app.post('/user',(req,res)=>{
    //在服务器中可以使用req.body这个属性来接收客户端发送过来的请求体
    console.log(req.body)
    res.send('ok')
})


app.listen(80,()=>{console.log('running')})