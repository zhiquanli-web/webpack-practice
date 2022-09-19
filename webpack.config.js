const path = require("path");

module.exports = {
  // context: path.resolve(__dirname, "."),
  mode: "development",
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./build"),
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        // use: "./sy-loader/sy-loader01.js", // 这里的相对路径相对于context
        // 执行顺讯从右向左/从后向前
        use: ["sy-loader01", "sy-loader02", "sy-loader03"], // 这里的相对路径相对于context
      },
      // {
      //   test: /\.js$/i,
      //   use: "sy-loader01",
      //   enforce: "pre", // pre: normalLoader优先执行(pitchLoader最后执行); post：与pre相反
      // },
      // {
      //   test: /\.js$/i,
      //   use: "sy-loader02",
      // },
      // {
      //   test: /\.js$/i,
      //   use: "babel-loader",
      //   enforce: "pre"
      // },
    ],
  },
  resolveLoader: {
    modules: ["node_modules", "./sy-loader"], // loader路径查找问题 默认为node_modules
  },
};
