const http = require('http')
const fs = require('fs')

http.createServer(function (request, response) {
  console.log('request come', request.url)

  const html = fs.readFileSync('test.html', 'utf8') // 1.在读取内容时，一定要设置为utf8格式，这样读取出来的是字符串。
                                                    // 如果未设置utf8格式，则会读取为二进制格式，则无法使用node.js中的response.end()来发送了
  response.writeHead(200, {
    'Content-Type': 'text/html'   //2.这里需要设置'Content-type'这个头部为'text/html'。
  })                              // node.js默认自动为我们加了这个Content-type为text/html，如果我们强制该为text/plain，则会是字符串
  
  // response.writeHead(200, {
  //   'Content-Type': 'text/plain'
  // })

  response.end(html)
}).listen(8888)

console.log('server listening on 8888')

// 3. 所有的在8888服务中的ajax请求，都必须在8888这个域中，如果跨域，则必须服务器那边同意你跨域才可以正常显示返回的内容。