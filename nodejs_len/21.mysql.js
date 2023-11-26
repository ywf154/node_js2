const mysql = require('mysql')
const db = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'123456',
    database:'users'
})
//检测数�?库是否�?�常�?否�?�常连接
db.query('select 1',(err,results)=>{
    if(err) return console.log(err.message)
    console.log(results)
})


// const sqlStr = 'select * from teacher information'
// db.query(sqlStr,(err,results)=>{
//     if(err) return console.log(err.message)
//     console.log(results)
// })
