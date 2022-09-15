const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "[name].bundle.js",
    chunkFilename: "[name].chunk.js"
  },
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        // loader: "css-loader",
        use: [
          // {
          //   loader: "css-loader",
          // options: {}
          // },
          "style-loader",
          "css-loader",
        ],
      },
    ],
  },
  optimization: {
    // 对代码进行压缩相关的操作
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
    splitChunks: {
      chunks: "all", // async-异步导入; intial-同步导入
      miniSize: 2000, // 最小尺寸，如果拆分出来一个，那么拆分出来的这个包的大小最小为miniSize
      maxSize: 0, // 将大于maxSize的包，拆分成不小于miniSize的包
      minChunks: 2, // 表示引入的包，至少被引入了minChunks次
      cacheGroup: {
        // vender: /[\/\]node_modules[\\/]/, // 匹配所有第三方文件
        vender: {
          test: /[\/\]node_modules[\\/]/, // 匹配所有第三方文件
          filename: "[id]_venders.js",
          priority: -10 // 谁的优先级高就先使用谁打包
        },
        bar: {
          test: /bar_/,
          filename: "[id]_bar.js",
        },
        default: {
          minChunks: 2,
          filename: "common_[id].js",
          priority: -20
        },
      },
    },
  },
};
