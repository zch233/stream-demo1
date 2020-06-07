const fs = require('fs')
const stream = fs.createWriteStream('./file.text')
for (let i = 0; i < 10000; i++) {
  stream.write(`这是${i}行\n`)
}
stream.end()
console.log('end')