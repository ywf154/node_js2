const express = require('express')
const app = express()
app.use((req,res,next) => {
const time = Date.now()  //挂在在中间件  ←
})

app.get('/',(req,res)=>{
          // const time = Date.now()    ↑
    res.send('Home Page.')
})

app.get('/user',(req,res)=>{
          // const time = Date.now()    ↑
    res.send('User Page.')
})

app.listen(80,()=>{
    console.log('running')
}) 