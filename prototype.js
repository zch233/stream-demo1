const fs = require('fs')
const s = fs.createReadStream('./file.txt')
// 运行命令：node --inspect-brk prototype
console.log(s)