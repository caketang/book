__RAIL__

* Response 事件处理最好在50ms内完成
* Animation 在10ms内产生一帧
* Idle 最大化空闲时间
* Load 传输内容到页面可交互的时间不超过5秒


__前端性能优化__
 ![性能优化图片](https://raw.githubusercontent.com/Guo2190/book/51cbb70454cbcb9796dc0de8e258fbc520945657/image/overall.dcdd4140.svg)

 # 一 缓存

1. 本地数据缓存  通过本地存储。 在业务代码侧实现缓存localstorage sessionstorage indexedDB
2. Memory 活在 disk Memory
3. Cache API  serviceWorker 
```js
// 注册serviWorker
self.addEventListener('message', function (e) {
    console.log('service worker receive message', e.data);
    e.waitUntil(
        self.clients.matchAll().then(function (clients) {
            if (!clients || clients.length === 0) {
                return;
            }
            clients.forEach(function (client) {
                client.postMessage(e.data);
            });
        })
    );
});
```
4. http缓存  强缓存 expires cache-controll  协商缓存 e-tag/if-None-match  Last-Modified/if-last-Modified

Service Worker
memory cache
disk cache(HTTP cache)
push cache
5. Push Cache 是 HTTP/2 中的内容，当以上三种缓存（service work Memory http缓存）都没有命中时，它才会被使用。它只在会话（Session）中存在，一旦会话结束就被释放，并且缓存时间也很短暂，在Chrome浏览器中只有5分钟左右。 中的缓存只能被使用一次

# 二 发送请求

1. 避免多余重定向 301 永久重定向  302 临时重新定向 304：Not Modified  
   应用： 
* 跟踪内部流量
* 跟踪出站流量

2. DNS预解析
github.com
先检查本地 hosts 文件中是否有映射，有则使用；
查找本地 DNS 缓存，有则返回；
根据配置在 TCP/IP 参数中设置 DNS 查询服务器，并向其进行查询，这里先称为本地 DNS；
如果该服务器无法解析域名（没有缓存），且不需要转发，则会向根服务器请求；
根服务器根据域名类型判断对应的顶级域名服务器（.com），返回给本地 DNS，然后重复该过程，直到找到该域名；
当然，如果设置了转发，本地 DNS 会将请求逐级转发，直到转发服务器返回或者也不能解析。
3. 预先建立连接
我们知道，建立连接不仅需要 DNS 查询，还需要进行 TCP 协议握手，有些还会有 TLS/SSL 协议，这些都会导致连接的耗时。使用 Preconnect[3] 可以帮助你告诉浏览器：“我有一些资源会用到某个源（origin），你可以帮我预先建立连接。”
4. 使用cdn 

# 三 服务器响应

1. 使用流进行响应
2. 业务聚合 Backends for frontends（服务于前端的后端）
3. 避免代码问题

# 四 页面解析与处理

1. 注意资源在页面文档中的位置  js构建会阻塞dom构建  css构建又会阻塞js构建
2. 使用defer async
* defer 会在html解析完后 按照脚本出现的顺序依次执行
* async 下载完立即执行 同时阻塞html解析 不保证脚本间的执行顺序
总结  与主业务无关的js脚本用async .. 统计脚本 监控脚本 广告脚本 这些没有外部依赖不访问dom,在这些脚本上使用 async 可以有效避免这些非核心功能的加载影响页面解析速度。

3. 页面文档压缩 uglify gzip


# 五 页面静态资源
## 1. 总体原则 
* 减少不必要的请求
* 减少包的体积
* 降低应用资源的消耗
* 利用缓存
## js
### 1. 减少不必要的请求

+ 代码拆分与按需加载
+ 代码合并
### 2. 减少包的体积
+ 代码压缩
+ tree staking
+ 优化 polyfill 的使用
+ webpack 及分析包大小
### 3. 解析与执行
+ js的解析耗时
+ 避免大量的long task
### 4. 缓存 
+ 发布与部署  首先在文件名中包含文件内容的 Hash，内容修改后，文件名就会变化；同时，设置不对页面进行强缓存，这样对于内容更新的静态资源，由于 uri 变了，肯定不会再走缓存，而没有变动的资源则仍然可以使用缓存。
+ 将基础库打包代码合并

+ 将 runtime chunk 单独拆分出来

未完。。。

  