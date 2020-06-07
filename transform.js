const { Transform } = require('stream')
const upperTransform = new Transform({
  transform (chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase())
    callback()
  }
})

process.stdin.pipe(upperTransform).pipe(process.stdout)
