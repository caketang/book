**promise 实现原理**

promise 是个对象 能够把异步操最终的成功值或者失败的原因和相应的处理程序关联起来 异步方法返回一个 promise

then 需要重点理解

```js
  const REJECTED = 'REJECTED'
  const PENDING = 'PENDING'
  const FULFILLED = 'FULFILLED'
  const isFuction = v => typeof v === 'function'

  class Promisess{
    constructor(handle){
      if(typeof handle !== 'function'){
        throw new Error9( 'handle must be  function')
      }
      this._statue =  PENDING
      this._value = undefined
      this._fuilfilledQuenes = []
      this._rejectedQuenes = []
      try {
        handle(this._resolve.bind(this), this._reject.bind(this))
      } catch (error) {
        this.reject(error)
      }
    }
  _resolve(v){
    if(this._status !== PENDING)return
      const run = () =>{
        let cb
        this._value = v
        this._status = FULFILLED
        while (cb = this._fuilfilledQuenes.shift()) {
          cb(v)
        }

      }

      setTimeout(()=>run(),0)
  }
  _reject(err){
    if(this._status !== PENDING)return
      const run = () =>{
        let cb
        this._value = err
        this._status = REJECTED
        while (cb = this._rejectedQuenes.shift()) {
          cb(err)
        }

      }
      setTimeout(()=>run(),0)
  }

  }
  then(onFulfilled,onRejectd){
    const {_status, _value }= this
    return new Promisess((onFulfilledNext, onRejectdNext)=>{
      let fulfilled = (val)=>{
        try {
          if(!isFuction(onFulfilled)){
            onFulfilledNext(val)
          }else {
            let res = onFulfilled(val)
            if(res instanceof Promisess){
              res.then(onFulfilledNext,onRejectdNext)
            }else {
              onRejectenNext(res)

            }
          }
        } catch (error) {
          onRejectdNext(error)
        }

      }
      let rejected = (val) => {
            try {
                if (!isFuction(onRejected)) {
                    onRejectenNext(val)
                } else {
                    let res = onRejected(val)
                    if (res instanceof MyPromise) {
                        res.then(onFulfillenNext, onRejectenNext)
                    } else {
                        onRejectenNext(res)
                    }
                }
            } catch (error) {
                onRejectenNext(error)
            }
        }
            switch (_status) {
                case PENDING:
                    this._fuilfilledQuenes.push(fulfiled)
                    this._rejectedQuenes.push(rejected)
                    break;
                case REJECTED:
                    rejected(_value)
                    break;
                case FULFILLED:
                    fulfiled(_value)
                    break;

                default:
                    break;
            }
        
    })

    catch(onRejected){
      return this.then(undefined, onRejected)
    }
     static reselove(value) {
        if (value instanceof MyPromise) return value
        return new MyPromise((resolve) => resolve(value))
    }
    static reject(err) {
        if (err instanceof MyPromise) return err
        return new MyPromise((resolve, reject) => reject(value))
    }
  }


```
