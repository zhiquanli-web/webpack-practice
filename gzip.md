```js
  // compression-webpack-plugin
  new CompressionWebpackPlugin({
    threshold: 0, // 压缩的最小文件大小 默认为0
    test: /\.(css|js)/,
    minRatio: 0.8, // 最小压缩比例，达到这个值才会压缩 默认为0.8
    algorithm: 'gzip', // 压缩算法、
    // exclude
    // include
  })

```

### htm l文件的压缩（开发环境没有压缩，生产环境默认压缩）
```js
  new HtmlWebpackPlugin({
    template: "./index.html", // 相对于当前项目的根目录(运行环境)，这里不需要使用path.resolve
    inject: true, // 静态资源注入 默认为true [true | false | 'head' | 'body']
    cache: true, // 当文件没有发生任何改变时，直接使用缓存
    // minify: false, // false时不进行压缩
    minify: isProduction ? {
      removeComments: true, // 移除注释
      removeRedundantAttributes: false, // 是否移除多余的属性
      // ...
    } : false
  })

```