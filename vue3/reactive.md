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
![reactive](https://www.jianshu.com/p/51745a0fe3af?u_atoken=1dcb8028-0308-4ee2-a27f-ec61e109eea5&u_asession=01_WPSCk5j-1n3KfRiwudrTMhVJly7W0K0IRO2Xhk_yMk2fD71D0e4I8OQFWOUhFO0X0KNBwm7Lovlpxjd_P_q4JsKWYrT3W_NKPr8w6oU7K_BaBcoE_y2jCxWTFaiqY6BnHmbkqVcEgdObpAroqY1_GBkFo3NEHBv0PZUm6pbxQU&u_asig=05zOyEpzkQtID72ACuBpeb8Jwg3a4RCVuJuAgsTB_3NQIS71_WM-zGxUjeU9RLta7xLQ0OIlXmH-p3N7qzL5CNYf2TYjisNu570rl33MmPrxdPWdk4uYOZZvtky099iVEnrH1UsHnP5JsKZ2BlMpjviLtr0NmKC4ePYl2OVwD0kqb9JS7q8ZD7Xtz2Ly-b0kmuyAKRFSVJkkdwVUnyHAIJzSzZ5-UUwBhtwUiMrhnC9LD5NqL4gh3telhhfajjek846xbSxAaWh9ph0bRUFW-6vO3h9VXwMyh6PgyDIVSG1W_Z0xSoxz5aAfuxphdIUx_aA_EfRCNG5Eh4CmV7Kcr19wOuOBXxKng-RdygKlkryXVMA6DkreYUlDakD1sIzl03mWspDxyAEEo4kbsryBKb9Q&u_aref=ozLydiHzKyVbP5PkJ%2FazsSe8YzQ%3D)
export const mutableHandlers: ProxyHandler<object> = {
  get,
  set,
  deleteProperty,
  has,
  ownKeys
}
vue3 用以上函数 可以针对get set delete in 操作符拦截