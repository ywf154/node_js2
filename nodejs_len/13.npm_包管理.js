// npm i moment  下载这个moment包
const moment = require('moment')
const dt = moment().format('YYYY-MM-DD HH:mm  ss')
console.log(dt)
// 在共享源代码时，需要删除node_modules文件夹，但要创建package.json文件
// 快速创建方式：npm init -y
//一般安装过npm i后，会自动创建package.json文件并记录安装的包和版本号（类似于目录）
// 注意：文件所在的文件夹不能有中文和空格   dependencies标签
// 卸载包：npm uninstall
          // 一些好用的模块
//-g i5ting_toc   md 转html功能  运行方式：i5ting_toc -f 要转换的路径 -o
