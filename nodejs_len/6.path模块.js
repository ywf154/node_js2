const path = require('path')
const fs = require('fs')
console.log('________1.path.join使用方法______________________')
const path_str = path.join('/a','/b/c','../','d','e')
    // ../抵消上一级或者说前一个/内容
console.log('path_str:'+path_str)    // 打印  \a\b\d\e
const path_str1 = path.join('/a','/b/c','../','../','d','e')
    // 2个../抵消2个上一级或者说前一个/内容
console.log('path_str1:'+path_str1)    // 打印  \a\d\e
console.log('__________2.path.basename使用方法________________')
const fpath = '/a/b/c/index.html'
var full_name = path.basename(fpath)   //保留最后一个'/'后面的内容
console.log('full_name:'+full_name)    //index.html
var name_without_ext = path.basename(fpath,'.html')  //去除后面的内容
console.log('name_without_ext:'+name_without_ext)    //index
console.log('___________3.path.extname使用方法________________')
const f_ext = path.extname(fpath)  //保留最后的'.'及后面的内容即文件的扩展名
console.log('path.f_ext:'+f_ext)  //html

console.log('_______读取时用到path.jion_______________________')
fs.readFile(path.join(__dirname,'/day11.txt'),'utf-8',function(err,dataStr){
    if(err){return console.log(err.message)}
    console.log('dataStr:'+dataStr)
})

