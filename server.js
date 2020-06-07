const fs = require('fs')
const http = require('http')

const server = http.createServer()

// 不用 stream 很占内存
server.on('request', (request, response) => {
  fs.readFile('./file.txt', (err, data) => {
    if (err) throw err
    response.end(data)
    console.log('done')
  })
})

server.listen(8888)
