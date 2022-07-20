__浏览器输入url发生了啥__


1. url解析/dns解析查找域名ip地址
2. 网络链接发起http 请求
3. http报文传输
4. 服务器接受数据
5. 服务器响应请求
6. 服务器返回数据
7. 客户端接受数据
8. 浏览器加载/渲染界面
9. 打印绘制输出



# tcp三次握手🤝 四次挥手
+ tcp 解决乱序 丢包重传  流控 拥赛控制
+ `Sequence Number`是记录包的序号， tcp会按照报文字节进行编号，解决包在网络中乱序问题
+ `Acknowledgement Number`是确认序列号 用于向发送方确认已经收到了那些包，用于解决不丢包的问题
+ `Window` 也叫 `Advertised-windows` 著名的滑动窗口 用来解决流控
+ `TCP FLag` 就是包的类型 主要操作TCP状态机
+ SYN(synchronous建立联机) ACK(acknowledgement 确认) PSH(push传送) FIN(finish结束) RST(reset重置) URG(urgent紧急)

Sequence number(顺序号码) Acknowledge number(确认号码)

## TCP 三次握手 
* 其实就是建立一个TCP链接 客户端与服务器交互需要三个数据包 握手的主要作用就是确认双方接收和发送能力是否正常 初始序列号 交换窗口大小 以及mss信息

1. 第一次握手 主机A发送syn=1 随机产生的 seq number= 123456数据包 发送给服务器，主机B由syn1知道 主机A要联机
2. 第二次握手 主机B收到确认联机信息后生成 ack = seq number+1    syn = 1 ack =1 随机产生seq number = 12121数据包 发送给主机A
3. 第三次握手 主机A收到 检查ack 是否与第一次发送的seq number正常 及ack =1 若正确 则向 主机b发送 ack number= 主机b的seq number+1 ack=1主机b收到seq值确认正确 ack=1 则建立连接