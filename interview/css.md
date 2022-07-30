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
1. 利用padding-bottom 和 margin-bottom 正负值相抵 不会影响布局的特点  设置父容器设置超出隐藏（overflow:hidden） 这样父容器的高度就还是它里面的列没有设定padding-bottom时的高度，当它里面的任一列高度增加了，则父容器的高度被撑到里面最高那列的高度，其他比这列矮的列会用它们的padding-bottom补偿这部分高度差。
2. 利用table-cell所有单元格度相对的特性 来实现多列等高
3. 利用flex布局中项目align-items属性默认为stretch，如果项目未设置高度或设为auto，将占满整个容器的高度
的特性，来实现多列等高 。在pc端兼容性不是很好，在ie9以及ie9以下不支持。
```
#### 17. 经常遇到的浏览器的兼容性有哪些？原因，解决方法是什么，常用 hack 的技巧？
```
1. png24位的图片在iE6浏览器上出现背景
解决方案： 做成PNG8, 也可以引用一段脚本处理
2. 浏览器默认的margin和padding不同
解决方案：加一个全局的*{margin:0;padding:0;}来统一。
3. IE6双边距bug：在IE6下，如果对元素设置了浮动，同时又设置了margin-left或
margin-right，margin值会加倍。
#box{float:left;width:10px;margin:0 0 0 10px;}

这种情况ie会产生20px的距离
解决方案： 在float标签样式控制中加入_display:inline, 将其转化为行内属性（_这个符号只有ie6会识别）

4. 首先，巧妙的使用“\9”这一标记，将IE游览器从所有情况中分离出来。 接着，再次使用 "+" 将IE8和IE7、IE6分离开来，这样IE8已经独立识别。
background: #f1ee18 /*所有识别*/
.background: #f1ee18\9 /*ie 6 7 8识别*/
+background: #f1ee18 /*ie 6 7识别*/
_background: #f1ee18 /*ie6 识别*/

5. IE下，可以使用获取常规属性的方法来获取自定义属性，也可以使用getAttribute()获取自定义
属性；Firefox下，只能使用getAttribute()获取自定义属性
解决方法： 统一通过getAttribute()获取自定义属性。
6. IE下，event对象有x、y属性，但是没有pageX、pageY属性;Firefox下，event对象有
pageX、pageY属性，但是没有x、y属性。
解决方法： 条件注释， 缺点是浏览器下可能会增加额外的http请求
7. Chrome中文界面下默认会将小于12px的文本强制按照12px显示
 解决方法：
 2.还可以使用-webkit-transform:scale(0.5);注意-webkit-transform:scale(0.75);
收缩的是整个span的大小，这时候，必须要将span转换成块元素，可以使用display：block/inline-block/...；

8. 超链接访问后hover样式不会出现了 被点击访问过的超链接样式不再具有hover和active了
解决方法： 改变css属性排序 L_V_H_A

9.
怪异模式问题：漏写DTD声明，Firefox仍然会按照标准模式来解析网页，但在IE中会触发怪异模
式。为避免怪异模式给我们带来不必要的麻烦，最好养成书写DTD声明的好习惯。
```

#### 18.li 与 li 之间有看不见的空白间隔是什么原因引起的？有什么解决办法？
```
浏览器会把inline元素间的空白字符（空格、换行、Tab等）渲染成一个空格。而为了美观。我们通常是一个<li>放在一行，
这导致<li>换行后产生换行字符，它变成一个空格，占用了一个字符的宽度。

解决方法： 
1. 为li设置float：left， 不足 有的容器不能设置浮动 如左右切换的焦点图
2. 将所有li写在一行 不美观
3. 将ul的字符尺寸设置为0 font-size:0, 不足 ul中的其他字符尺寸也被设置为0， 需要重新设置其他字符尺寸， 且在safar浏览器依旧会出现 最新版本好了
4. 消除ul的字符间隔letter-sapceing: -8px; 不足 这也设置了li的字符间隔了因此将li的字符间隔设置为letter-spaceing: normal;
```
#### 19.为什么要初始化css样式
```
因为浏览器的兼容问题 不同的浏览器对有些标签的默认值不同  如果没对css初始化往往会出现浏览器直接的页面显示差异

初始化样式 会对seo有一定影响 但鱼和熊掌不可兼得 力求最小的影响下进行初始化
最简单的初始化
*{
  margin:0
  padding:0
}

```
#### 20. 什么是包含快  对于包含块的理解
```
包含块（containing）就是元素定位和计算的一个框

1. 根元素 很多场景下可以堪称html 被称为初始包含块， 其尺寸等同于浏览器可视窗口的大小
2. 对于其他元素， 如果该元素的position是realitve或者static 则包含快 由其最近的块容器祖先盒的content-box边界形成
3. 如果元素position:fixed 则包含块是初始包含块
4. 如果元素position:absolute，则“包含块”由最近的position不为static的祖先元素建立，具体方式如下：

如果该祖先元素是inline元素 规则略微复杂：

•假设给内联元素的前后各生成一个宽度为0的内联盒子（inline box），则这两个内联盒子的padding box外面的包
围盒就是内联元素的“包含块”；
•如果该内联元素被跨行分割了，那么“包含块”是未定义的，也就是CSS2.1规范并没有明确定义，浏览器自行发挥
否则，“包含块”由该祖先的padding box边界形成。

如果没有符合条件的祖先元素，则“包含块”是“初始包含块”。

MDN回答更准确点：


如果 position 属性为 static 、 relative 或 sticky，包含块可能由它的最近的祖先块元素（比如说 inline-block, block 或 list-item 元素）的内容区的边缘组成，也可能会建立格式化上下文 (比如说 a table container, flex container, grid container, 或者是 the block container 自身)。
如果 position 属性为 absolute ，包含块就是由它的最近的 position 的值不是 static （也就是值为fixed, absolute, relative 或 sticky）的祖先元素的内边距区的边缘组成。
如果 position 属性是 fixed，在连续媒体的情况下 (continuous media) 包含块是 viewport ,在分页媒体 (paged media) 下的情况下包含块是分页区域 (page area)。
如果 position 属性是 absolute 或 fixed，包含块也可能是由满足以下条件的最近父级元素的内边距区的边缘组成的：
transform 或 perspective 的值不是 none
will-change 的值是 transform 或 perspective
filter 的值不是 none 或 will-change 的值是 filter(只在 Firefox 下生效).
contain 的值是 paint (例如: contain: paint;)

contain 属性允许我们指定特定的 DOM 元素和它的子元素，让它们能够独立于整个 DOM 树结构之外。目的是能够让浏览器有能力只对部分元素进行重绘、重排，而不必每次都针对整个页面
contain 可以控制页面的重绘与重排
```

#### 21.CSS 里的 visibility 属性有个 collapse 属性值是干嘛用的？在不同浏览器下以后什么区别？
```
1.对于一般元素 它的表现跟visibility: hidden 一样  元素是不可见的  但此时仍占用页面空间
2. 但例外的是 如果这个元素是table相关元素， 例如table行 table group  table列  他的表现跟display：nono一样, 它们占用空间会释放/
在不同浏览器下的区别：

在谷歌浏览器里，使用collapse值和使用hidden值没有什么区别。

在火狐浏览器、Opera和IE11里，使用collapse值的效果就如它的字面意思：table的行会消失，它的下面一行会补充它的位
置。

```

#### 22.width:auto 和 width:100%的区别
```
一般而言
width:100%会使元素box的宽度等于父元素的content box的宽度。

width: auto会使元素撑满整个父元素，margin、border、padding、content区域会自动分配水平空间。


```
#### 23.绝对定位元素与非绝对定位元素的百分比计算的区别
```
绝对定位元素的高宽百分比是根据临近position不为 static 祖先元素的padding-box来计算的
非绝对定位元素的宽高百分比则是相对于父元素的content-box来计算的

```

#### 24.简单介绍使用图片 base64 编码的优点和缺点。
```
base64编码是一种图片处理格式，通过特定的算法将图片编码成长字符串， 在页面上显示的时候 可以用一串长字符串代替图片的url属性
优点
1. 减少一个图片的http请求
缺点：
1. 根据base64编码原理 生成的大小比原文件大三分之一 。如果把大图片编码到html/css 造成体积增加 影响加载速度  还会增加浏览器对html或css文件解析渲染时间
2. 使用base64无法直接缓存，要缓存只能缓存包含base64的文件，比如HTML或者CSS，这相比与直接缓存图片的效果要
差很多。
3. 兼容性的问题，ie8以前的浏览器不支持。
小图标可以使用base64来引入

```
#### 25.'display'、'position'和'float'的相互关系？
```
1. 首先我们判断元素的display属性是否为none, 如果为none 则position和float属性的值不影响元素的最后变现
2. 然后判断position的值是否为absolute或者fixed 如果是则float 失效，  并且display的 值应该被设置为table或者block 具体需要看初始转换值
3. 如果positon的值不为absolute或者fixed， 则判断flaot的属性是否为none， 如果不是 则display的值按上面的转换。 注意如果position值为realitive 并且flaot属性存在
 则relative相对于浮动后的定位
 
 如果 'float' 的值不是 "none"，该框浮动并且 'display' 会被按照转换对应表设置。


4. 如果float的值为none 则判断元素是否是根元素。 如果是根元素display值按上面转换规则。 如果不是  则保持指定的display属性值不变

总的来说 类似于优先级  position 为absolute或者fixed 优先级最高 有它存在的时候 浮动不起作用  display值也需要转换。 其次元素的float特性值不为none的时候
或者他是根元素的时候。 调整display的值。。  最后 非根元素并且非浮动元素  并且非绝对定位元素 display特性同设置值

```
#### 26.margin重叠问题的理解
相关知识点：
```
块级元素的上外边距和下外边距有时候会合并为单个边距，这种现象为margin合并
产生折叠的必要条件 margin必须是相邻的
而根据w3c规范 两个margin是邻接的必须满足以下条件：
*必须是处于常规文档流（非float和绝对定位的块级盒子） 并且同处于一个bfc当中
*没有线盒 没用空隙 没有padding和border将他们分隔开
*都属于垂直方向上的相邻外边距 可以是下面任意一种情况
* 元素的mtop与其第一个常规文档流的子元素的mtop
*元素的margin-bottom与其下一个常规文档流的兄弟元素的margin-top
*height为auto的元素的margin-bottom与其最后一个常规文档流的子元素的margin-bottom
*高度为0并且最小高度也为0，不包含常规文档流的子元素，并且自身没有建立新的BFC的元素的margin-top
和margin-bottom

margin合并三种场景：
1. 相邻兄弟元素margin合并
解决办法： 设置块状格式化元素上下文BFC

2. 父级和第一个/最后一个子元素的margin合并

解决办法：
父元素设置为块状格式化上下文元素；
•父元素设置border-top值；
•父元素设置padding-top值；
•父元素和第一个子元素之间添加内联元素进行分隔。

对于margin-bottom合并，可以进行如下操作（满足一个条件即可）：
•父元素设置为块状格式化上下文元素；
•父元素设置border-bottom值；
•父元素设置padding-bottom值；
•父元素和最后一个子元素之间添加内联元素进行分隔；
•父元素设置height、min-height或max-height。

3. 空块级元素的margin合并
 解决办法：

 设置垂直方向的border / pading
 里面添加内联元素（空格没用）
 设置height或者min-height
```

回答：
```
margin重叠时指垂直方向 两个相邻元素的margin发生重叠的情况
一般来说可以分为四种情形：
1.相邻兄弟元素的mbottom和margin-top值发生重叠，可以设置其中一个元素为BFC解决
2.父元素的mtop和子元素的mtop发生重叠，他们发生的重叠原因因为是相邻的  所以可以通过这一点来解决问题我们可以为父元素这是boder-top/padding-top值
来分隔他们 我们也可以为父元素设置BFC来解决
3. 高度为auto 父元素的mbottom和子元素的margin-bottom重叠， 重叠原因是因为他们相邻 另一个是父元素高度不固定 我们可以设置父元素的border-bottom。padding-bottom隔绝他们 或者设置父元素的最小高度解决 还有设置父元素为BFC最简单

4. 是没有内容的元素，自身的margin-top和margin-bottom发生的重叠。我们可以通过为其设置border、pa
dding或者高度来解决这个问题。

```


#### 27.对BFC规范的理解 BLOCK FOMARTTING CONTEXT
相关知识点：
```
块格式化上下文（Block Formatting Context，BFC）是Web页面的可视化CSS渲染的一部分，是布局过程中生成块级盒
子的区域，也是浮动元素与其他元素的交互限定区域。

通俗来讲  
BFC是一个独立的布局， 可以理解为一个容器 在这个容器中按照一定规则进行物体摆放 并不会影响其他环境中的物品
如果一个元素符合触发BFC条件 则BFC的元素布局不受外部影响

创建BFC

1 根元素或包含根元素的元素
2 浮动元素 float=left|right或者inherit (!= none)
3 绝对定位元素 position absolute/fixed
4 display inline-block  flex inline-flex table-cell table-caption
5 overflow=hidden auto scroll (!= visibile)

```
回答：
```
BFC是指块级格式上下文 一个元素形成BFC后 他的内部元素布局不会影响到外部元素 外部元素也不会影响到BFC内部元素布局 一个BFC就像一个隔离区域 和其他区域互不影响

一般来说根元素就是一个BFC区域 浮动和绝对定位元素也会形成BFC  display的inline-block flex 这些属性也会创建BFC, 还有设置元素overflow的值不为visible创建BFC

```
#### 28.IFC是什么
```
IFC是指行级格式上下文 它有这样的布局规则

1. 行内上下文内部的盒子会在水平方向 一个接一个放置
2. 当一行不够的时候 自动切换到下一行
3. 行级上下文的高度 是由最高内联盒子的高度决定的

```

#### 29.请解释一下为什么需要清除浮动？清除浮动的方式
```
浮动元素可以左右移动 直到遇到另一浮动元素或者到它的边缘框  浮动框不属于文档中的普通流  当元素浮动后不影响块级元素布局 只会影响内联元素布局
此时文档流中的普通流就会表现得该浮动框不存在一样的布局模式。当包含框
的高度小于浮动框的时候，此时就会出现“高度塌陷”。


清除浮动是清除浮动元素产生的影响 浮动的元素 高度会塌陷  而高度塌陷是页面布局无法正常展示

清除浮动的方
1. clear
2. 使用BFC块级格式化上下文清楚浮动

因为BFC元素不会影响外部元素的特点，所以BFC元素也可以用来清除浮动的影响，因为如果不清除，子元素浮动则父元
素高度塌陷，必然会影响后面元素布局和定位，这显然有违BFC元素的子元素不会影响外部元素的设定。

```
#### 30.clear清除浮动的原理
```
cler: both left right none
如果单看字面意思，clear:left应该是“清除左浮动”，clear:right应该是“清除右浮动”的意思，实际上，这种解释是有问
题的，因为浮动一直还在，并没有清除。

还需要注意的一点是clear属性指的是元素盒子的边不能和前面的浮动元素相邻，注意这里“前面的”3个字，也就是clear属
性对“后面的”浮动元素是不闻不问的。考虑到float属性要么是left，要么是right，不可能同时存在，同时由于clear
属性对“后面的”浮动元素不闻不问，因此，当clear:left有效的时候，clear:right必定无效，也就是此时clear:left
等同于设置clear:both；同样地，clear:right如果有效也是等同于设置clear:both。由此可见，clear:left和cle
ar:right这两个声明就没有任何使用的价值，至少在CSS世界中是如此，直接使用clear:both吧。

一般用伪元素清楚浮动
.clear::after{
content:'',
display: block;
clear:both;

}
clear属性只有块级元素才有效的，而::after等伪元素默认都是内联水平，这就是借助伪元素清除浮动影响时需要设置disp
lay属性值的原因。

```
#### 31.zoom1清楚浮动原理