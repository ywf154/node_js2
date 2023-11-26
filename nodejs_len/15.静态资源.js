const express = require('express')
const app = express()

//调用express.static方法，快速对外提供静态资源
app.use(express.static('./picture'))
// http://127.0.0.1/1.png可以看到./picture中1的图片
//也可以用一个前缀
app.use('./picture',express.static('./picture'))
// http://127.0.0.1/picture/1.png可以看到./picture中1的图片


app.listen(80,()=>{  
    console.log('express server running at http://127.0.0.1')
})