__bind__

bind方法创建一个新函数，在bind（）函数被调用时， 这个新的函数this指向传入bind的第一个参数 ，其余参数传给新函数， 供调用新函数时使用


函数调用 /  new  考虑这2点
```js
Function.prototype.cBind=function(context){
  let args = Array.prototype.slice.call(arguments,1)
  let self = this
  let Fnoop = function(){}
  let Fbund = function(){
    let argsC = Array.prototype.slice.call(arguments)
    return self.apply(this instanceof Fbund? this : context, args.concat(args))
  }
  Fnoop.prototype = this.prototype
  Fbund.prototype = new Fnoop()
  return Fbund
}
  


```