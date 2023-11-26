const fs = require('fs')
// 参数1：读取的文件路径，参数2：默认，参数3：回调函数，读取成功还是失败显示的结果
fs.readFile('./day11.txt','UTF-8',function(err,dataStr){
console.log(err)
console.log('--------')
console.log(dataStr)
})
