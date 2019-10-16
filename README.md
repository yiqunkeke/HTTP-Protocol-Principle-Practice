## 为什么要做这一门课？
    1.很多web开发（无论前端还是后端）真的不理解HTTP
              
        后端工程师： 
            * HTTP method ? 
              可能只知道get、post，甚至不知道put、delete
              更不用说这些method的语义了
            * HTTP status code ?
              可能只知道 200, 500, 401, 404

        前端工程师：
            * HTTP缓存 ？
              客户端缓存、代理服务器缓存、如何验证缓存的可用性、
              发现很多前端同学不清楚，也没有想要去了解清楚

        为什么会出现这种情况？
            HTTP协议作为web开发中最基础的内容，所有的web开发的内容和静态资源都是通过HTTP协议进行传输的。
            为什么前端和后端都不怎么深入了解HTTP协议呢？
            因为入门的时候，很难有人告诉你要先从HTTP协议学起，而且如果没有计算机基础，直接学HTTP的话，
            上手很难.
            所以，
            前端入门一般学习 HTML、CSS、JS
            后端入门学习 框架。
            它帮你处理好了在部分内容，所以没有机会接触HTTP，也没有机会去发现问题。
            所以，会忽视HTTP重要性。

    2.HTTP真的很重要
        前端所有的静态资源加载和数据加载，都是要通过HTTP协议进行发送
        后端作出来的服务，提供出来的内容，丢给前端或者移动端APP,也需要通过HTTP发送。
        所以根本绕不开HTTP

    3.提升自身价值


## 举个最简单的例子
    * 输入URL打开网页
    * AJAX获取数据
    * img标签加载图片
        img标签中的src，填好路径后，我们就可以把这个图片在网页中显示出来，
        它也是经过HTTP协议加载过来图片的资源，然后再把它显示出来。

    这些都是HTTP最简单的例子，但是它们都跟HTTP脱不开关系。  
    
    很多同学他们确实知道可以通过 XML HTTP来获取数据，也知道可以通过img去加载图片，
    但是它们不清楚在HTTP这个过程中，浏览器和服务器之间怎么进行交互？
    里面有哪些内容可以影响到数据加载的速度或者是传输的效率？
    这些东西，很多同学不清楚里面到底是怎么一个逻辑。

    比如：
        * Cache-Control
            public、private
            must-revalidate
            no-cache、 no-store
        * 缓存验证
            缓存是存储在客户端的，客户端并不知道服务端是否有改变缓存的这部分数据，那么我们有时候就需要对
            缓存进行验证。可以通过以下两种方式验证缓存
                1.last-modified配合if-modified-since
                2.etag 配合 if-none-match
            缓存是web服务中对性能提升最大的一环。所以深入理解HTTP缓存对于web开发同学，无论是前端还是后端，
            都非常重要。
            当然HTTP协议不仅仅是缓存。
        * 更多有意义的头
            1.Content-Type、Content-Encoding等用来约束数据类型。
            2.Cookie保持会话信息。
                我们最常见的session的方案就是通过cookie来实现的
            3.CORS实现跨域并保持安全性限制。
                如果我们的跨域服务对所有人开放，则每个人都可以进行访问，对于别有用心的人访问的话，
                如何保证服务的安全性？
                在更合理的地方使用合理的配置，能为你的网站带来更高的收益。

## 深入到TCP
    什么是三次握手
    HTTPS链接的创建过程，以及为什么HTTPS就是安全的
    什么是长链接，为什么需要和链接
    HTTP2的信道复用又为什么能提高性能

    HTTP协议是目前互联网上使用最频繁的协议，可以说每个互联网公司都会在相关的地方使用HTTP协议。
    这也造就了现在互联网公司对于web开发人才的需求非常大。
    所以只要你是作web开发相关的同学，在开发中会涉及到HTTP协议相关的使用，你都应该将深入理解HTTP
    协议作为你的基底。在好的基础上再去横向发展，才能提高你的学习效率以及你对新知识的深入理解。
    而这门课就是为你打造坚实的基础而生的。

    HTTP协议的节点
    以下展示了从输入url开始到加载完页面显示出来之前的过程：
    每个节点都代表了HTTP协议为我们做的功能。这些功能对我们web开发人员来说可能是透明的。
    但是如果你深入理解了每个节点之后，你可以使用一些方法去优化每个节点相关它能够带来的性能提升。
    所以在这门课中，这些内容我们都会覆盖到。
    学完这门课你都可以知道它在具体每个节点做了什么事情，哪些地方会影响到这个节点上面的速度。

    Redirect            App cache           DNS               TCP               Request            Response
      跳转               应用缓存           DNS查找         创建TCP链接           发送请求            接收响应

## 讲课过程
    实例演示
    图文配合
    Nginx使用

## 能够为你带来什么
    对于后端开发同学，你能够打造性能更好的HTTP服务
    对于前端开发同学，你能够更好的使用HTTP特性帮助你进行开发，
    并且掌握一些更好的提高静态资源和数据加载性能的方案。
    能够帮助前后端更好的协作

## 需要什么基础    
    知道HTTP这个概念
    至少要知道HTML是什么、浏览器是怎么样的一个东西、有web服务存在、浏览器是通过web服务沟通才能拿到数据。
    这些概念至少要清楚。
    真的想深入学习HTTP
    你要认为HTTP协议是非常重要的，而且想要学好

