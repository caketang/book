__new  操作符__

new 运算符创建一个用户对象的实例或者内置构造函数的实例 

1. 创建一个空的简单 JavaScript 对象（即{}）；
2. 为步骤 1 新创建的对象添加属性__proto__，将该属性链接至构造函数的原型对象 ；
3. 将步骤 1 新创建的对象作为this的上下文 ；
4. 如果该函数没有返回对象，则返回this。
``` js

  function newC(){
    let obj = {}
    let Constructor = [].shift.call(arguments)
    obj.__proto__ = Constructor.prototype

    let ret = Constructor.apply(obj, arguments)

    // 如果该函数没有返回对象，则返回this。
    // 还需要判断返回的值是不是一个对象，如果是一个对象，我们就返回这个对象，如果没有，我们该返回什么就返回什么。
    return typeof ret === 'object' ? ret : obj  

  }

