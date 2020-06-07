const fs = require('fs')
const stream = fs.createWriteStream('./file.txt')
for (let i = 0; i < 1000000; i++) {
  const flag = stream.write(`这是${i}行，这里将会有很多很多的内容，啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊\n`)
  // flag：false 的意思是你写的太快了，数据积压了
  console.log(flag, i)
}
stream.end()
console.log('end')