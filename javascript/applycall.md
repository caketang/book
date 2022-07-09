__apply call__

call（）方法使用一个指定的this值 和一个或多个参数调用该函数


``` js
  Function.prototype.call2 = function(context){
    context = context || window
    context.fn = this
    let args = []
    for(let i = 1, len= arguments.length; i<len;i++){
      args.push(`arguments[${i}]`)
    }
    let result =  eval(`context.fn(${args})`)
    delete context.fn
    return result
  }


```


__call 使用用途__

1. 对象的继承  （借用构造函数继承）
``` js
function superClass () {
    this.a = 1;
    this.print = function () {
        console.log(this.a);
    }
}

function subClass () {
    superClass.call(this);
    this.print();
}

subClass();
// 1

```
2. 借用方法  Array.prototype.slice.call(arguments)

__apply 使用用途__

1. Math.max
```js
  Math.max.apply(null, [1,2,3,4,5])


```
2. 实现2个数组合并

Array.prototype.push(arr1, arr2)

__总结__

call apply 是改变对象的执行上下文，并且是立即执行的。它们在参数上的写法略有区别。

bind也能改变对象的执行上下文 它返回一个新函数 并稍后调用才执行