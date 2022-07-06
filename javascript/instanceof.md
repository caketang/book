__instanceof__

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