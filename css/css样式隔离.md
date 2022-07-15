__Css样式隔离__

# css模块化实现方式

1.  BEM命名 blcok element modifier

```css
  /* 块即是通常所说的 Web 应用开发中的组件或模块。每个块在逻辑上和功能上都是相互独立的。 */
  .block {
  }

  /* 元素是块中的组成部分。元素不能离开块来使用。BEM 不推荐在元素中嵌套其他元素。 */
  .block__element {
  }

  /* 修饰符用来定义块或元素的外观和行为。同样的块在应用不同的修饰符之后，会有不同的外观 */
  .block--modifier {
  }


```

2. css Modules  指的是我们像 import js 一样去引入我们的 css 代码，代码中的每一个类名都是引入对象的一个属性，通过这种方式，即可在使用时明确指定所引用的 css 样式。

  + 定义css文件
  + 在js中导入css文件
  + 配置cssloader打包
  + 最终打包出来的css类名由一串hash值构成

3. css in js其实是一种编写思想，目前已经有超过 40 多种方案的实现，最出名的是 styled-components。




