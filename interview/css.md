### 目录
#### 1. 介绍一下标准的css盒子模型  低版本的ie盒子模型有什么不同
相关知识点
```
  (1)有两种盒子模型： IE盒模型 （border-box）, W3C标准盒模型（content-box）
  (2)盒模型 content padding border margin 四部分
  IE盒模型和W3C标准盒模型的区别：
  1.W3C标准盒模型: 属性width，height只包含内容content 不包含padding border
  2.IE盒模型： 属性width height包含content padding border, 指的是content+padding+border
  
  在ie8+浏览器中使用哪个盒模型可以由box-sizing(css新增属性)控制，默认值为content-box,即标准盒模型；
  如果将box-sixing设置为border-box则是用的ie盒模型，如果在ie6 7中DOCTYPE缺失会将盒子模型解释为IE盒子模型，
  若在页面中声明了DOCTYPE类型，所有的浏览器都会把盒模型解释为W3C盒模型
```
回答：
```
  盒模型都是有四个部分组成的 content padding border margin
  标准盒模型和IE盒模型的区别在于设置width和height时，所对应的范围不同，标准盒模型的width和height属性只包含了content，
  而IE盒模型的width和height属性的范围包含了border pading 和content
  一般来说 可以通过修改元素的box-sizing属性来改变元素的盒模型

```
#### 2. CSS的选择符有哪些？id 类 标签 后代 相邻后代 兄弟～ 属性选择器a[rel=''] 伪类啊 a:hover 伪元素::before 通配*
```
(1) id选择器（#myid）
(2) 类选择器（.myclass）
(3) 标签选择器（div,h1,p）
(4) 后代选择器（h1 p）
(5) 相邻后代选择器（子）选择器（h1>p） （直接子代组合器）
(7) 兄弟选择器（h1~p）
(6) 相邻兄弟选择器（h1+p）
(8) 属性选择器（a[rel='external']）
(9) 伪类选择器（a：hover）
(10) 伪元素选择器（：：before）
(11) 通配符选择器（*）
```
#### 3. ::before 和:after 中双冒号和单冒号有什么区别？解释一下这 2 个伪元素的作用。
相关知识点：
```
单冒号（：）用于css3伪类 双冒号（：：）用于css3伪元素 伪元素由双冒号和伪元素名称组成
双冒号是在当前规范中引入的 用于区分伪类和伪元素 不过浏览器需要同时支持就的已存在的伪元素的写法
比如：first-line  :first-letter :before :after
而新的css3中引入伪元素则不允许在支持旧的单冒号的写法

想让插入的内容出现在其内容之前 使用：：before 否则使用：：after
在代码顺序上 ：：after 生成的内容也比：：before生产的内容靠后
如果按堆视角 ：：after生成的内容会在：：before的内容之上

```
回答：
``` 
  在css3中单冒号是表示伪类的 双冒号表示伪元素 但是为了兼容已有的伪元素写法  在一些浏览器中也可以使用单冒号表示伪元素

  伪类一般匹配的是元素特殊状态  如hover link等  而伪元素一般匹配的特殊位置 比如after before等

```

#### 4.伪类与伪元素的区别

```
css引入伪类和伪元素概念是为了格式化文档树以外的信息 也就是伪类和伪元素用来修饰不在文档树中的部分 比如一句话的第一个字母 或者列表中第一个元素

伪类用于当已有的元素处于某个状态时 为其添加对应的样式 这个状态根据用户的行为而动态变化 比如说当用户悬停在指定的元素时， 我们可以用：hover这个伪类描述这个元素其状态

伪元素用于创建不存在于文档树的元素 并为其添加样式 它们允许我们为元素的某些部分设置样式 比如说 我们可以通过：：before来在一个元素前增加一些文本 并为这些文本添加一些样式
虽然用户可以看见这些文本 但这些文本并不存在于文档树中

有时会发现伪元素使用了两个冒号 而不是一个冒号 这是css3的一部分 并尝试区分伪类和伪元素 大多数浏览器都支持这2个值 按照规则应该使用（：：）而不是（：） 从而区分伪类和伪元素。 但是由于旧版本的W3C并未按照此规范进行特别区分 ，因为目前绝大多书的浏览器都支持使用这两种方式表示伪元素

```

#### 5.css中哪些属性可以继承
相关资料：
```
每个css属性定义概括的时候都指出了这个属性是默认继承的 还是不继承的 这决定了当你没有为元素的属性指定值是该如何计算值
当元素的一个继承属性没有指定值时，则取父元素同属性的值。 只有文档根元素取该属性的概述中给定的初始值（这里的意思应该是该属性本身的定义中的默认值）

当元素的一个非继承属性（在Mozilla code里有时称之为reset property） 没有指定值时 则取属性的初始值initial value (该值在该属性概括里被指定)
有继承性的属性
（1）字体系列属性
 font font-family font-style font-size font-variant font-strecth font-size-adgust
 (2) 文本属性的值
 text-indent text-align、text-shadow、line-height、word-spacing、letter-spacing、
text-transform、direction、color
 (3) 表格布局属性
 caption-side border-collapse empty-cells
 （4）列表属性
 list-style-type list-style-image list-style-position list-style
 (5) 光标属性
 cursor
 (6) 元素可见性 
 visibility
 (7) 一些不常用到的 speak page 设置潜逃引用的引号类型quotes等属性

注意：当一个属性不是继承属性时，可以使用inherit关键字指定一个属性应从父元素继承它的值，inherit关键字用于显式地
指定继承性，可用于任何继承性/非继承性属性。


```
回答
```
每一个属性都在定义中给出了是否有继承性， 一个具有继承性的属性会在没有给定指定值的时候， 会使用父元素的同属性的值
一般具有继承性的属性 字体相关属性 fonstzie fontwight  文本相关的属性 color和text-align等
表格的一些布局属性 列表属性list-style等 还有光标属性cursor 元素可见性 visibility
当一个属性不是继承属性的时候，我们也可以通过将它的值设置为inherit来使它从父元素那获取同名的属性值来继承。


```