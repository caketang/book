__curry 柯里化__

解释：又称部分求值 是把接受多个参数的函数变成接受一个单一的函数
 tips： 占位符 柯里化没写 
作用
1. 参数复用
2. 提前返回
3. 延迟计算


__通用实现__

``` js

    function curry(fn,...rest){

      return function(...rests){
        return fn.apply(this, rest.concat(rests))
      }
    }

```

__高阶实现__

以上柯里化函数已经能解决一般需求了，但是如果要多层的柯里化总不能不断地进行currying函数的嵌套吧，我们希望经过柯里化之后的函数每次只传递一个或者多个参数，那该怎么做呢：

``` js
  function curryHigh(fn,len){
    len = len || fn.length
    return function(...rest){
      return  rest.length>=len? fn.apply(this,rest) : curryHigh(curry([fn].concat(rest)), len-rest.length)

    }

  }

```


``` js 
  //高阶es6实现
  const curry = fn => judge = (...args) => args.length === fn.length ? fn(...args) : arg => judge( ...args,arg) 
```
//const curry = fn=> judge = (...args)=> args.length === fn.length? fn(..args): arg => judge(...args, arg)

# 常见用法

1. 参数复用
2. 提高实用性
3. 延迟执行