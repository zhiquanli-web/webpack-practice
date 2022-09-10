## Plugin

- CleanWebpackPlugin(清空 build 目录)

```js
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

{
  plugin: [new CleanWebpackPlugin()];
}
```

- HTMLWebpackPlugin(创建.html 文件并引入 js)

```js
const HTMLWebpackPlugin = require("html-webpack-plugin");

{
  plugins: [
    new HTMLWebpackPlugin({
      title: "webpack", // <%= htmlWebpackPlugin.options.title %>
      template: "./public/index.html",
    }),
  ];
}
```

- DefinePlugin(webpack 内置插件:允许在编译时创建配置的全局常量，是一个 webpack 内置的插件)

```js
const { DefinePlugin } = require("webpack");
{
  plugins: [
    new DefinePlugin({
      BASE_URL: '"./"', // 内部是直接取内容 BASE_URL: "./" 相当于const BASE_URL = ./ ,所以需要再包裹一层
    }),
  ];
}
```

- CopyWebpackPlugin

```js
{
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          // to: "build"//可省， 默认最好
          globOptions: {
            ignore: ["**/index.html", "**/.DS_Store"], // **/: 需要加上这个才能忽略(具体看官方文档); .DS_Store: mac电脑会出现这个文件
          },
        },
      ], // 匹配
    }),
  ];
}
```
