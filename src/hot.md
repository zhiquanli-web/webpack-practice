#### HMR(框架中不需要：vue默认开启了(开箱即用)、react:react-refresh)
```js
// webpack.config.js
{
  devServer: {
    hot: true
  }
}
// module在需要热更新的模块中
if(module.hot) {
  // module.hot.accept("./math.js") // 要使用热更新的文件
  module.hot.accept("./math.js", () => { // 第二个参数可不传
    console.log(1233)
  })
}

```