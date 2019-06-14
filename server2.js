const http = require('http')

http.createServer(function (request, response) {
    console.log(`request com ${request.url}`)

    //设置8887端口的server2服务---允许跨域
    response.writeHead(200, {
        'Access-Control-Allow-Origin': '*',  // 任何域名的页面都可以访问这个服务8887-----这样不安全，因为所有第三方的都可以访问
       // 'access-Control-Allow-Origin': 'http://127.0.0.1:8888'  // 某个指定域名下的页面可以访问该服务8887
        'Access-Control-Allow-Headers': 'x-test-cors', // 允许的http请求--头部（headers）
        'Access-Control-Allow-Methods': 'PUT', // 允许的http请求--方法(methods)
    })

    response.end(`123`)
}).listen(8887)

console.log(`server listening on 8887`)
