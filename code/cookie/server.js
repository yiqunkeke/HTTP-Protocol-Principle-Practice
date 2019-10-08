const http = require('http')
const fs = require('fs')

http.createServer(function (request, response) {
  console.log('request come', request.url)

  if (request.url === '/') {
    const html = fs.readFileSync('test.html', 'utf8')
    response.writeHead(200, {
      'Content-Type': 'text/html',
      'Set-Cookie': ['id=123; max-age=2', 'abc=456; HttpOnly']
    })
    response.end(html)
  }

}).listen(8888)

console.log('server listening on 8888')

// 如果没有给cookie设置过期时间max-age，那么浏览器关闭后，cookie就没有了。