## Loader

- css-loader | style-loader | less/scss-loader
- postcss-loader | autoprefixer | postcss-preset-env
- file-loader | url-loader

```js
  {
    test: "/\.css/$",
    // loader: "css-loader",
    use: [
      // { loader: "style-loader" }
      "style-loader",
      {
        loader: "css-loader",
        options: {
          importLoader: 1 // 前面有一个loader(less-loader)
        }
      },
      "less-loader"
    ]
  }

  {
    test: "/\.css/$",
    // loader: "css-loader",
    use: [
      // { loader: "style-loader" }
      "style-loader",
      {
        loader: "css-loader",
        options: {
          importLoader: 1 // 前面有一个loader(less-loader)
        }
      },
      "less-loader",
      {
        loader: "postcss-loader",
        options: {
          postcssOptions: {
            plugin: [
              // require("autoprefixer")
              // require("postcss-preset-env")
              "postcss-preset-env"
            ]
          }
        }
      },
      // "postcss-preset-env", // 配置写在postcss.config.js中
    ]
  }

```

### assetModule(配置输出文件夹-名 output.assetModuleFilename | generator.filename)

- asset/resource(file-loader) | asset/inline(url-loader) | asset/source(raw-loader) | asset

```js
// url-loader的limit效果需要这样来实现
{
  test: /\.(png|jpe?g|gif|svg)$/,
  type: "asset",
  generator: {
    filename: "img/[name].[hast:6].[ext]"
  },
  parser: {
    dataUrlCondition: {
      maxSize: 100 * 1024, // 100kb
    }
  }
}
```
