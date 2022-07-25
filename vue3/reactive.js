function reactive(obj){
    if(!isObject(obj)){
        return obj
    }
    return new Proxy(obj, {
        get(target, key){
            let res = Reflect.get(target, key)
            console.log('get', res)
            track(target,key)
            return isObject(res) ? reactive(res) : res
        },
        set(target, key, value){
            let res =   Reflect.set(target, key, value)
            console.log('set', key)
            trigger(target, key)

            return res
        },
        deleteProperty(target, key){
            let res = Reflect.deleteProperty(target, key)
            trigger(target, key)
            return res
        }
    })

}
function isObject(obj){

    return typeof obj === 'object'
}
const effectStack = []
const targetMap = new WeakMap()
function effect(fn){
    const e = creatReactiveEffect(fn)
    e()
    return e
}

function creatReactiveEffect(fn){
    const effectFn = function(){
        try {
            effectStack.push(fn)
            fn()
        } catch (error) {
            effectStack.pop()
        }
    }
    return effectFn
}


function track(target, key){
    const effect = effectStack[effectStack.length - 1]

    if(effect){
        let depMap = targetMap.get(target)
        if(!depMap){
            depMap = new Map()
            targetMap.set(target, depMap)
        }
        let deps = depMap.get(key)
        if(!deps){
            deps = new Set()
            depMap.set(key, deps)
        }
        deps.add(effect)
    }

}

function trigger(target, key){
    const depMap  = targetMap.get(target)
    if(!depMap)return
    const deps = depMap.get(key)
    if(deps){
        deps.forEach(dep=>dep())
    }

}
