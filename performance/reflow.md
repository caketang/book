# 重排
* 概念： 当dom的变化影响了元素的几何信息， 浏览器需要重新计算元素的几何属性 将其放在正确的位置 这个过程叫做重排
## 重排触发条件
+ 页面初始渲染
+ 添加删除DOM
+ 改变元素位置 尺寸 内容 字体大小 
+ 改变浏览器窗口大小 resize
+ 激活css伪类 ：hover
+ 设置style属性 因为通过设置style属性改变结点样式的话，每一次设置都会触发一次reflow
+ 查询某些属性或调用某些计算方法：offsetWidth、offsetHeight等，除此之外，当我们调用 getComputedStyle方法，或者IE里的 currentStyle 时，也会触发重排，原理是一样的，都为求一个“即时性”和“准确性”。
1. 全局重排
2. 局部重排

# 重绘
* 概念： 当一个元素外观改变 但没有改变布局 重新绘制的过程叫做重绘
## 常见重绘
+ color border-style visibilty background 

### 减少重排范围
1. 尽可能在低层级dom节点上
2. 减少使用table布局    不得已使用 可以设置table-layout:auto / fixed 让table一行一行渲染

### 减少重排次数

1. 样式集中改变
2. 分离读写操作
3. 将dom离线
4. 使用absolute fixed脱离文档流
5. 优化动画