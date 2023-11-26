// 导入fs模块
const fs = require('fs')
fs.writeFile('./day112.txt','你是的谁',function(err){
    // 文件写入成功err的值为null
    if(err){
        console.log('文件写入失败'+err.message)  
    }
    else{console.log('文件写入成功')} 
    // console.log(err)

})