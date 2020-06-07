const fs = require('fs')
const stream = fs.createWriteStream('./file.txt')
for (let i = 0; i < 1000000; i++) {
  stream.write(`这是${i}行\n`)
}
stream.end()
console.log('end')