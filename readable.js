const { Readable } = require('stream')

// 先推再读
// const inStream = new Readable()

// inStream.push('zch')
// inStream.push('233333333333333333')
// inStream.push(null) // no more data

// // inStream.pipe(process.stdout)
// // 等价于
// inStream.on('data', chunk => {
//   console.log('push')
//   console.log(chunk.toString())
// })


// 等读了再推
const inStream = new Readable({
  read(size) {
    const char = String.fromCharCode(this.charCode++)
    console.log('push\n')
    this.push(char)
    if (this.charCode > 90) {
      this.push(null)
    }
  }
})

inStream.charCode = 65

inStream.pipe(process.stdout)
