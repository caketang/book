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


  