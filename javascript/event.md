__事件循环机制__
 [一看就懂](https://segmentfault.com/q/1010000016147496)
执行栈 与 事件队列
微任务 宏任务

我们只需记住当当前执行栈执行完毕时会立刻先处理所有微任务队列中的事件，
然后再去宏任务队列中取出一个事件。同一次事件循环中，微任务永远在宏任务之前执行。

 任务仅来自于我们的代码。它们通常是由 promise 创建的：对 .then/catch/finally 处理程序的执行会成为微任务。微任务也被用于 await 的“幕后”，因为它是 promise 处理的另一种形式。

还有一个特殊的函数 queueMicrotask(func)，它对 func 进行排队，以在微任务队列中执行。

每个宏任务之后，引擎会立即执行微任务队列中的所有任务，然后再执行其他的宏任务，或渲染，或进行其他任何操作。



```js
async function async1(){
  console.log('async1 start')
  await async2()
  console.log('async1 end')
}
async function async2(){ 
  console.log('async2')
}
console.log('script start')
setTimeout(function(){
  console.log('setTimeout') 
},0)  
async1();
new Promise(function(resolve){
  console.log('promise1')
  resolve();
}).then(function(){
  console.log('promise2')
}).then(function() {
  console.log('promise3')
}).then(function() {
  console.log('promise4')
}).then(function() {
  console.log('promise5')
}).then(function() {
  console.log('promise6')
}).then(function() {
  console.log('promise7')
}).then(function() {
  console.log('promise8')
})
console.log('script end')

```


这个问题涉及以下3点:

async 函数的返回值
Promise 链式 then() 的执行时机
async 函数中的 await 操作符到底做了什么
## tips

1. async 函数的返回值:


+ 被 async 操作符修饰的函数必然返回一个 Promise
+ 当 async 函数返回一个值时，Promise 的 resolve 方法负责传递这个值
+ 当 async 函数抛出异常时，Promise 的 reject 方法会传递这个异常值

async function async2(){ 
  console.log('async2')
}
转换为

async function async2(){ 
  console.log('async2')
  return Promise.resolve()
}

2. Promise链式then（）执行时机

+ 多个 then() 链式调用，并不是连续的创建了多个微任务并推入微任务队列，因为 then() 的返回值必然是一个 Promise，而后续的 then() 是上一步 then() 返回的 Promise 的回调
以示例代码为例:

```JavaScript

new Promise(function(resolve){
  console.log('promise1')
  resolve();
}).then(function(){
  console.log('promise2')
}).then(function() {
  console.log('promise3')
})

```

3. async函数中 await操作符做了什么

async function async1(){
  console.log('async1 start')
  await async2()
  console.log('async1 end')
}
转化

async function async1(){
   console.log('async1 start')
   return RESOLVE(async2()).then(()=>console.log('async1 end'))
}

问题关键就出在这个 RESOLVE 上了，要引用以下知乎上贺师俊大佬的回答：

RESOLVE(p)接近于Promise.resolve(p)，不过有微妙而重要的区别：p 如果本身已经是 Promise 实例，Promise.resolve 会直接返回 p 而不是产生一个新 promise；
如果RESOLVE(p)严格按照标准，应该产生一个新的 promise，尽管该 promise 确定会 resolve 为 p，但这个过程本身是异步的，也就是现在进入 job 队列的是新 promise 的 resolve 过程，所以该 promise 的 then 不会被立即调用，而要等到当前 job 队列执行到前述 resolve 过程才会被调用，然后其回调（也就是继续 await 之后的语句）才加入 job 队列，所以时序上就晚了
所以上述的 async1 函数我们可以进一步转换一下：



根据 TC39 最近决议，await将直接使用Promise.resolve()相同语义。
