const fs = require('fs')
// 参数1：读取的文件路径，参数2：默认，参数3：回调函数，读取成功还是失败显示的结果
// fs.readFile('C:\\Users\\yi\\Desktop\\桌面\\node_js\\day11.txt','UTF-8',function(err,dataStr){
//     if(err){
//     return console.log('读取文件失败'+ err.message)
//     }
//     console.log('读取文件成功:\n'+dataStr)
// })

// __dirname表示当前文件所处的目录
fs.readFile(__dirname+'/day11.txt','UTF-8',function(err,dataStr){
    if(err){
    return console.log('读取文件失败'+ err.message)
    }
    console.log('读取文件成功:\n'+dataStr)
})