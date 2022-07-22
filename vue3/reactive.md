# reactive
```js
/* TODO: */
export function reactive(target: object) {
  if (readonlyToRaw.has(target)) {
    return target
  }
  return createReactiveObject(
    target,                   /* 目标对象 */
    rawToReactive,            /* { [targetObject] : obseved  }   */
    reactiveToRaw,            /* { [obseved] : targetObject }  */
    mutableHandlers,          /* 处理 基本数据类型 和 引用数据类型 */
    mutableCollectionHandlers /* 用于处理 Set, Map, WeakMap, WeakSet 类型 */
  )
}
```
`reactive` 通过createReactiveObject函数产生一个proxy 针对不同的数据类型给定了不同的处理方法
