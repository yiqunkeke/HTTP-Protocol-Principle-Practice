const http = require('http')
const fs = require('fs')

http.createServer(function (request, response) {
  console.log('request come', request.url)

  if (request.url === '/') {
    const html = fs.readFileSync('test.html', 'utf8')
    response.writeHead(200, {
      'Content-Type': 'text/html'
    })
    response.end(html)
  }

  if (request.url === '/script.js') {
    response.writeHead(200, {
      'Content-Type': 'text/javascript',
      'Cache-Control': 'max-age=20, public'  
      // 当我们在响应中添加了'Cache-Control:max-age=20'这个头之后，我们再次刷新时，在调试Network里，
      // 1. script.js的Size变成了memory cache
      // 2. 而且 Time 变成了 0

      // 这表示script.js再次请求是直接从本地缓存中读取的，无任何网络延迟。

      // 这就是Cache-Control的作用：让我们在请求资源的时候，可以从缓存中去读。
    })
    response.end('console.log("script loaded")')

    // 3.当我们服务端返回的内容有改变时，
    // 因为它请求的url没有发生变化，所以它依然只会从缓存里面去读取内容。而没有去服务端加载新的script.js文件。
    
    // Cache-Control 是一个客户端缓存， 如果我们设置了Cache-Control，它就直接在客户端缓存了，根本不经过服务端的验证。
    // 所以在服务端更新了文件之后，客户端并不能感知服务端的文件是否更新，所以它还是去缓存去读，
    // 就导致静态资源在服务端更新之后，没有及时的更新到客户端这个问题。这是我们在前端开发时常见的问题。
    
    // 我们希望浏览器去缓存我们的静态资源文件（css,js,图片），因为这样再次打开网站时，加载速度就会变的非常快。
    // 但是我们又不希望服务端在更新了静态资源之后，客户端依然是请求的老的缓存中的资源。

    //  4.常见的前端解决方案就是：
    //   . 根据打包完成的文件，依据更改内容的变化生成一段哈希码，加在文件名上。
    //     因为这个哈希码是依然内容的变化来自动计算，如果内容没有改动，则哈希码不会变化。
    //     反应到页面上就是url没有发生变化。
    //     而如果你的内容有变化，则哈希码会变化，则对应到的url也会有变化，
    //      url变化之后，则发起的请求就是一个新的请求，而不是之前缓存在浏览器中的静态资源请求。
    //     这样就可以达到一个更新缓存的目的。

    //     这是目前业界刷新浏览器缓存的通用的方案。


  }

}).listen(8888)

console.log('server listening on 8888')