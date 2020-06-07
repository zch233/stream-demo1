const fs = require('fs')
const zlib = require('zlib')
const file = process.argv[2]

fs.createReadStream(file)
  .pipe(zlib.createGzip())
  .on('data', () => console.log('.')) // 这里可以做进度条
  .pipe(fs.createWriteStream(file + '.gz'))
  .on('finish', () => console.log('Done'))
