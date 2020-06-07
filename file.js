const fs = require('fs')
const stream = fs.createWriteStream('./file.txt')
for (let i = 0; i < 1000000; i++) {
  stream.write(`这是${i}行，这里将会有很多很多的内容，啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊\n`)
}
stream.end()
console.log('end')