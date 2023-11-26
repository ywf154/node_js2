const { MongoClient } = require('mongodb');

// MongoDB连接URI
const uri = 'mongodb://localhost:27017/user';

// 连接到MongoDB
MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) {
        console.log('连接到MongoDB时发生错误:', err);
        return;
    }

    console.log('成功连接到MongoDB！');

    // 在此处执行与数据库相关的操作

    // 断开与MongoDB的连接
    client.close();
});
