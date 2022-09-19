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
        use: "sy-loader01.js", // 这里的相对路径相对于context
      },
    ],
  },
  resolveLoader: {
    modules: ["node_modules", "sy-loader"], // loader路径查找问题 默认为node_modules
  },
};
