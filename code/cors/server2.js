const http = require('http')

http.createServer(function (request, response) {
  console.log('request come', request.url)
  
  // 突破限制的几种方法
  response.writeHead(200, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'X-Test-Cors',  // 允许请求中有自定义的header
    'Access-Control-Allow-Methods': 'POST, PUT, DELETE', // 默认跨域只允许GET POST HEAD方式的请求
    'Access-Control-Max-Age': '1000'  // 1000s之内，不需要在发起预请求进行验证了，直接发正式的请求就可以。
  })
  response.end('123')
  // 1. 如果不设置Access-Control-Allow-Origin头，实际上，http请求依然可以发送，并且内容也依然可以返回，
  // 只不过浏览器在解析返回内容时，如果发现返回的响应中没有写Access-Control-Allow-Origin头的话，浏览器依据安全策略，会自动把返回的内容屏蔽掉。
  // 即浏览器帮你把返回内容拦截掉了。
  // 这其实是浏览器提供的功能

  // 2. 如果使用curl命令发送跨域的http请求,则不存在跨域概念，即任何的http请求都可以发送，并且都可以返回内容，而且都可以正常输出的。

  // 3. 所以这是 “浏览器” 的 “同域限制” 。
}).listen(8887)

console.log('server listening on 8887')