const fs = require('fs')
const zlib = require('zlib')
const file = process.argv[2]
const crypto = require('crypto')

const { Transform } = require('stream')
const transform = new Transform({
  transform (chunk, encoding, callback) {
    console.log('.')
    callback(null, chunk)
  }
})


fs.createReadStream(file)
  .pipe(crypto.createCipher('aes192', '123456'))
  .pipe(zlib.createGzip())
  .pipe(transform) // 这里可以做进度条，webpack 就是这样的原理，vue-loader => scss-loader => css-loader => style-loader
  .pipe(fs.createWriteStream(file + '.gz'))
  .on('finish', () => console.log('Done'))
