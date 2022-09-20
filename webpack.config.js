const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const AutoUploadPlugin = require("./sy-plugin/AutoUploadPlugin");
module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./build"),
  },
  module: {
    rules: [],
  },
  resolveLoader: {
    modules: ["node_modules", "./sy-loader"],
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new AutoUploadPlugin({
      host: "123.204.16.16",
      username: "root",
      password: "",
      remotePath: "/root/path",
    }),
  ],
};
