const fs = require('fs')
// 读取并判断是否读取成功
fs.readFile('./成绩.txt','utf8',function(err,dataStr){
    if(err){return console.log('读取失败'+err.message)}
    // console.log('读取成功：\n'+dataStr)
    // 1先把成绩数据按空格进行分割
// 再遍历分割后的数组，对每一项数据进行字符串的替换操作
const arr_old = dataStr.split(' ')
const arr_new =[]
arr_old.forEach(item =>{
    arr_new.push(item.replace('=',':'))
})
const new_str = arr_new.join('\n')
// '\r\n'在windows里是换行的
console.log(new_str)
fs.writeFile('./成绩new.txt',new_str,function(err){
    if(err){return console.log('写入失败'+err.message)}
    console.log('写入成功')
})
})
