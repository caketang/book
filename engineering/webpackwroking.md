# webpack工作流程
1. webpack.config.js 配置
2.  entry 入口文件
    resolve 文件路径指向 可加快打包流程
    outfile 生成文件

    module: 这里配置了处理各模块的 loader ，包括 css 预处理 loader ，es6 编译 loader，图片处理 loader。
    plugins webpack的插件

* loader 能转换各类资源 并处理对应模块加载器 可以并行执行
* chunk code splitting后的产物  按需加载分块  存放不同的module
* plugin webpack插件实体 在 webpack 中你经常可以看到 compilation.plugin(‘xxx’, callback) ，你可以把它当作是一个事件的绑定，这些事件在打包时由 webpack 来触发
3. 流程总览
未完
# webpack插件机制
* Webpack的插件机制依赖于一个核心的库， Tapable。
未完

# webpack loader机制
loaders 就像首尾相接的管道那样，从右到左地被依次运行。对应的代码如下：

