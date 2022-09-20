const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
        use: {
          loader: "sybable-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.md$/i,
        use: ["symd-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolveLoader: {
    modules: ["node_modules", "./sy-loader"],
  },
  plugins: [new HtmlWebpackPlugin()],
};
