const fs = require('fs')
const http = require('http')

const server = http.createServer()

server.on('request', (request, response) => {
  const stream = fs.createReadStream('./file.txt')
  stream.on('data', chunk => {
    console.log('读取了一次数据')
    console.log(chunk.toString())
  })
  stream.on('end', () => {
    console.log('好了')
  })
  stream.pipe(response)
})

server.listen(8888, () => console.log('listen：8888'))
