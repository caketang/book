__理解 generators__ 

```js

function* quips(name) {
  yield " 你好 " + name + "!";
  yield " 希望你能喜欢这篇介绍 ES6 的译文 ";
  if (name.startsWith("X")) {
    yield " 你的名字 " + name + "  首字母是 X，这很酷！";
  }
  yield " 我们下次再见！";
}


```

```js
async function fn(args) {
  // ...
}

// 等同于

function fn(args) {
  return spawn(function* () {
    // ...
  });
}

function spawn(genF){

    return new Promise(function(resolve, reject){
      // 拿到generators 生成器
      const gen = genF()
      function step(nextF){
        let next
        try {
          next = nextF()
        } catch (e) {
          reject(e)
        }
        if(next.done){
          return Promise.resolve(next.value)
          
        }
        Promise.reselove(next.value).then(function(v){
          return step(function(){return genF.next(v)})
        }, function(e){
          return step(function(){
            return genF.throw(e)
          })
        })
      }

      step(function(){return gen.next(undefined)})

    })



}


```