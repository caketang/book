# ![前端微服务](https://juejin.cn/post/6898268972178178061)
1. js沙箱  子应用之间相互不影响 。 全局变量事件处理 SnapshotSandbox  LegacySandbox ProxySandbox
2. css 隔离
3. html entry 
4. config entry 配置每个子应用的js和css 
5. 按需加载 css js html
6. 公共依赖加载
7. 预加载 空闲时加载子应用资源
8. 父子应用通讯
9. 子应用嵌套
10. 子应用并行


1. iframe
缺点： 
* 不是单页面应用  浏览器刷新 iframe url状态丢失 后退前进按钮无法使用
* 弹框类提示无法应用到整个应用 只能在对应子应用窗口展示
* 应用间不在一个相同域 只能从根部透传cookie 才可能实现免登录
* 每次进入子应用都重建上下文 资源重新加载 
* iframe 特性 搜索引擎无法获取  所以无法seo

2. web compontens
3. esm
4. qiankun
基于single-spa封装，提供了更加开箱即用的 API
技术栈无关，任意技术栈的应用均可 使用/接入，不论是 React/Vue/Angular/JQuery 还是其他等框架
HTML Entry 接入方式，让你接入微应用像使用 iframe 一样简单
样式隔离，确保微应用之间样式互相不干扰
JS 沙箱，确保微应用之间 全局变量/事件 不冲突
资源预加载，在浏览器空闲时间预加载未打开的微应用资源，加速微应用打开速度
umi 插件，提供了 @umijs/plugin-qiankun 供 umi 应用一键切换成微前端架构系统
除了最后一点拓展以外，微前端想要达到的效果都已经达到。
5. EMP  基于Webpack5的新特性Module Federation实现，


现有微前端解决方案：


iframe
Web Components
ESM
qiankun
EMP


各解决方案的利弊：



iframe可以直接加载其他应用，但无法做到单页导致许多功能无法正常在主应用中展示。


web Components及ESM是浏览器提供给开发者的能力，能在单页中实现微前端，不过后者需要做好代码隔离，并且他们都是浏览器的新特性，都存在兼容性问题，微前端方面的探索也不成熟，只能作为面向未来的微前端手段。


qiankun基本上可以称为单页版的iframe，具有沙箱隔离及资源预加载的特点，几乎无可挑剔。但可能存在以下几点不足：

对于React 深度定制项目来说，无法做到状态管理很好的传递
对于非标准的AMD、UMD、SystemJS 等加载方式的库会存在依赖问题(需要针对性改造)
多框架实现体积过大以及存在一定的调试成本



EMP作为最年轻微前端解决方案，也是吸收了许多web优秀特性才诞生的，它在实现微前端的基础上，扩充了跨应用状态共享、跨框架组件调用、远程拉取ts声明文件、动态更新微应用等能力。同时，细心的小伙伴应该已经发现，EMP能做到第三方依赖的共享，使代码尽可能地重复利用，减少加载的内容。


```js
 class SnapshotSandBox {
    windowSandshot = {}
    modifyPropMap = {}
    active(){
      for(const prop in window){
        this.windowSandshot[prop] = window[prop]

      }
      Object.keys(this.modifyPropMap).forEach(prop=>{
        window[prop] = this.modifyPropMap[prop]
      })
    }
    inactive(){
      for(const prop in window){
        if(window[prop] != this.windowSandshot[prop]){
          this.modifyPropMap[prop] = window[prop]
          window[prop] = this.windowSandshot[prop]
        }
      }
    }
   

}
 // 验证:
let snapshotSandBox = new SnapshotSandBox();
snapshotSandBox.active();
window.city = 'Beijing';
console.log("window.city-01:", window.city);
snapshotSandBox.inactive();
console.log("window.city-02:", window.city);
snapshotSandBox.active();
console.log("window.city-03:", window.city);
snapshotSandBox.inactive();




```
