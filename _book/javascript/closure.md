__闭包__

*_[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures#%E9%97%AD%E5%8C%85)_ 一个函数和其周围的引用绑定在一起，也就是被引用包围， 这样的组合就是闭包。 也就是说闭包是内层函数可以自由访问外部函数的作用域 闭包可以使变量保存在内存中

闭包 == 函数 + 函数自由访问变量

``` javascript
function makeFunc() {
    var name = "Mozilla";
    function displayName() {
        alert(name);
    }
    return displayName;
}

var myFunc = makeFunc();
myFunc();

```
##### 用处
1. 可以读取函数内部的变量
2. 让这些变量的值始终保存在内存内
##### tips
1.  闭包可能造成内存泄漏


