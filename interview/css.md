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
#### 6. css优先级如何计算
🇭相关知识点： 
```
CSS的优先级是根据样式声明的特殊性值来判断的。

选择器的特殊性值分为四个等级，如下：

（1）标签内选择符x,0,0,0
（2）ID选择符0,x,0,0
（3）class选择符/属性选择符/伪类选择符	0,0,x,0
（4）元素和伪元素选择符0,0,0,x

计算方法：

（1）每个等级的初始值为0
（2）每个等级的叠加为选择器出现的次数相加
（3）不可进位，比如0,99,99,99
（4）依次表示为：0,0,0,0
（5）每个等级计数之间没关联
（6）等级判断从左向右，如果某一位数值相同，则判断下一位数值
（7）如果两个优先级相同，则最后出现的优先级高，!important也适用
（8）通配符选择器的特殊性值为：0,0,0,0
（9）继承样式优先级最低，通配符样式优先级高于继承样式
（10）!important（权重），它没有特殊性值，但它的优先级是最高的，为了方便记忆，可以认为它的特殊性值为1,0,0,0,0。

计算实例：

（1）#demo a{color: orange;}/*特殊性值：0,1,0,1*/
（2）div#demo a{color: red;}/*特殊性值：0,1,0,2*/


注意：
（1）样式应用时，css会先查看规则的权重（!important），加了权重的优先级最高，当权重相同的时候，会比较规则的特殊性。

（2）特殊性值越大的声明优先级越高。

（3）相同特殊性值的声明，根据样式引入的顺序，后声明的规则优先级高（距离元素出现最近的）

 (4) 部分浏览器由于字节溢出问题出现的进位表现不做考虑

```
回答： 
```
判断优先级时，首先我们会判断一条属性声明是否有权重，也就是是否在声明后面加上了!important。一条声明如果加上了权重，
那么它的优先级就是最高的，前提是它之后不再出现相同权重的声明。如果权重相同，我们则需要去比较匹配规则的特殊性。

一条匹配规则一般由多个选择器组成，一条规则的特殊性由组成它的选择器的特殊性累加而成。选择器的特殊性可以分为四个等级，
第一个等级是行内样式，为1000，第二个等级是id选择器，为0100，第三个等级是类选择器、伪类选择器和属性选择器，为0010，
第四个等级是元素选择器和伪元素选择器，为0001。规则中每出现一个选择器，就将它的特殊性进行叠加，这个叠加只限于对应的等
级的叠加，不会产生进位。选择器特殊性值的比较是从左向右排序的，也就是说以1开头的特殊性值比所有以0开头的特殊性值要大。
比如说特殊性值为1000的的规则优先级就要比特殊性值为0999的规则高。如果两个规则的特殊性值相等的时候，那么就会根据它们引
入的顺序，后出现的规则的优先级最高。

```
#### 7.关于伪类 LVHA 的解释?
```
a标签有四种状态：链接访问前、链接访问后、鼠标滑过、激活，分别对应四种伪类:link、:visited、:hover、:active；

当链接未访问过时：

（1）当鼠标滑过a链接时，满足:link和:hover两种状态，要改变a标签的颜色，就必须将:hover伪类在:link伪
类后面声明；
（2）当鼠标点击激活a链接时，同时满足:link、:hover、:active三种状态，要显示a标签激活时的样式（:active），
必须将:active声明放到:link和:hover之后。因此得出LVHA这个顺序。

当链接访问过时，情况基本同上，只不过需要将:link换成:visited。

这个顺序能不能变？可以，但也只有:link和:visited可以交换位置，因为一个链接要么访问过要么没访问过，不可能同时满足，
也就不存在覆盖的问题。

```
#### 8.CSS3新增伪类
```
 (1) elem:nth-child(n) 选择父元素下的第n个子元素，并且elem标签为子元素的名称 n为第几个子元素
 (2) elem:nth-last-child(n) 作用同上  不过从后面查找
 (3) elem:last-child 选中最后一个子元素
 (4) elem:only-child  如果elme是父元素的唯一子元素 则选中
 (5) elem:nth-of-type(n) 选中父元素下第n个elme类型元素，n可以接受数字 或者函数
 (6) elem:first-of-type 选中父元素下第一个elme元素类型
 (7) elem:last-of-type 选中父元素下最后一个elme元素类型
 (8) elem:only-of-type 如果父元素下的子元素只有一个elem类型元素 则选中该元素
 (9) elem:empty 选中不包含子元素和内容的elem类型元素。
 (10) elem:target 选中当前活动的元素
(11) :not(elem)选择非elem元素的每个元素。
 (12):enabled 控制表单控件的禁用状态。
（13）:disabled	控制表单控件的禁用状态。
(14) :checked单选框或复选框被选中。



```
#### 9.如何居中div 
-水平居中： 给div设置一个宽度  然后添加marigin：0 auto;
```css
div{
  width:100;
  margin:0 auto;
}

```
—水平居中： 利用text-aligin实现
```css
  div.container{
	  text-align: center;
		font-size:0;
	}
	div.box{
	width:100px;
		display:inline-block;
		background:red;
		height:100px;
		font-size:16px
	}

```
-让绝对定位div居中
```css
div.box{
  width:100px;
  height:100px;
  background:pink;
  position:absolute;
  left:0;
  right:0;
  top:0;
  bottom:0;
  margin:auto;
}
```
-水平垂直居中一
```css
/*确定容器的宽高宽500高300的层设置层的外边距div{*/
{
position: absolute;/*绝对定位*/
width: 500px;
height: 300px;
top: 50%;
left: 50%;
margin: -150px 0 0 -250px;/*外边距为自身宽高的一半*/
background-color: pink;/*方便看效果*/
}
```
-水平垂直居中二
```css
/*未知容器的宽高，利用`transform`属性*/
div {
  position: absolute; /*相对定位或绝对定位均可*/
  width: 500px;
  height: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: pink; /*方便看效果*/
}

```
-水平垂直居中三
```css
/*利用flex布局实际使用时应考虑兼容性*/
.container {
  display: flex;
  align-items: center; /*垂直居中*/
  justify-content: center; /*水平居中*/
}
.containerdiv {
  width: 100px;
  height: 100px;
  background-color: pink; /*方便看效果*/
}


```
-水平垂直居中四
```css
/*利用text-align:center和vertical-align:middle属性*/ 使用:before元素
.container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  text-align: center;
  font-size: 0;
  white-space: nowrap;
  overflow: auto;
}

.container::after {
  content: '';
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}

.box {
  display: inline-block;
  width: 500px;
  height: 400px;
  background-color: pink;
  white-space: normal;
  vertical-align: middle;
}

```
回答
```
一般常见居中：
对于固定高宽：
1. 可以利用margin:0 auto实现元素水平居中
2. 利用绝对定位 设置四个方向的值都为0 并将margin:auto 由于宽高固定，因此对应方向实现平分，可以实现水
平和垂直方向上的居中。
3. 利用绝对定位， 先将元素left top设置50% 通过margin 负值调整元素的中心点到中心页面
4. 利用绝对定位，先将元素的左上角通过top:50%和left:50%定位到页面的中心，然后再通过translate来调整元素
的中心点到页面的中心。
5. 使用flex布局，通过align-items:center和justify-content:center设置容器的垂直和水平方向上为居中对
齐，然后它的子元素也可以实现垂直和水平的居中。
对于高度不定的元素  使用最后2种方法 可以实现元素的垂直和水平居中

```
#### 10 display 有哪些值
```css
block 块类型 默认宽度为父元素宽度 可设置宽高  换行显示
none 元素不显示 从文档流删除
inline 行内元素 默认内容为宽度 不可设置宽高 同行显示
inline-block   默认内容为宽度 可设置宽高 同行显示
list-item 像块元素一样显示 并添加样式列表标记
 
table 此元素会作为块级表哥来显示
inherit 规定应从父元素继承display属性的值

```
#### 11.position 的值 relative 和 absolute 定位原点是？
回答：
```
relative 定位的元素 是相对于元素本身的正常位置来定位的

absolute定位的元素 通过指定元素相对于最近的非 static 定位祖先元素padding box的偏移，来确定元素位置 也就是说在计算定位距离的时候，padding的值也要算进去。
```
#### 12.css3新特性 根据项目回答
```
新增各种css选择器 :not(.input) 所有class不是input的节点
圆角 border-radius
多列布局 （multi-column layout）
阴影和反射	（Shadow\Reflect）
文字特效		（text-shadow）
文字渲染		（Text-decoration）
线性渐变		（gradient）
旋转			（transform）
缩放，定位，倾斜，动画，多背景
例如：transform:\scale(0.85,0.90)\translate(0px,-30px)\skew(-9deg,0deg)\Animation:


```

#### 13.请解释一下 CSS3 的 Flex box（弹性盒布局模型），以及适用场景？
回答
```
flex布局是css3新增的一种布局方式 ，可以通过设置display:flex 使它成为flex容器 里面的所有子元素都会成为它的项目
一个容器默认有2个轴 水平主轴和 与主轴垂直的交叉轴， 可以用flex-direction指定主轴的方向 可以使用justify-content指定元素在主轴方向的排列方式，
使用align-items指定元素在交叉轴上的排列方式 还可以使用flex-wrap规定当一行排列不下时的换行方式

对于容器中的项目 我们可以使用order指定排列顺序， 还可以使用flex-grow指定排列空间有剩余的时候 项目的放大比例， 还可以使用flex-shrink指定排列空间不足时 项目的缩小比例

```

#### 14.用纯css创建三角形的原理
```
采用相邻边框均分的原理
将元素高宽设置为0
只设置border 把任意3条边隐藏掉 transparent, 剩下的就是一个三角形
css{
  width:0px;
  height:0px;
  border-width:10px;
  border-style:solid;
	border-color: transparent transparent transparent red;
	


}

```
#### 15. 一个满屏品字布局如何设计？
```
简单的方式：
	上面的div宽100%，
	下面的两个div分别宽50%，
	然后用float或者inline使其不换行即可

```

#### 16.css多列等高如何实现
```


```