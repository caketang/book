__instanceof__

检测构造函数的prototype属性是否出现在实例的原型链上

```js

function new_instance_of(leftVaule, rightVaule) { 
    let rightPrototype = rightVaule.prototype
    leftVaule = leftVaule.__proto__
    while (true) {
      if(leftVaule!==rightPrototype){
        return false
      }
      if(leftVaule === rightPrototype){
        return true
      }
      leftVaule == leftVaule.__proto__
    }
}

```
__typeof__
__Object.prototype.toString.call('1')__