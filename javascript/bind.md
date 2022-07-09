__bind__

bind方法创建一个新函数，在bind（）函数被调用时， 这个新的函数this指向传入bind的第一个参数 ，其余参数传给新函数， 供调用新函数时使用


函数调用 /  new  考虑这2点
```js
Function.prototype.cBind=function(context){
  if (typeof this !== "function") {
      throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
  }
  // 取第一个参数后面的全部参数 
  let args = Array.prototype.slice.call(arguments,1)
  let self = this
  
  let fNop = function(){}
  let fBound = function(){
    let argss = Array.prototype.slice.call(arguments)
    return self.apply(this instanceof fBound ? this : context, args.concat(argss))
  }
  // 采用原型式继承 防止new的时候  更改构造函数的prototype
  fNop.prototype = this.prototype 
  fBound.prototype = new fNop()
  return fBound


```