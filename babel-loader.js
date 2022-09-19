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
        use: {
          loader: "sybable-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  resolveLoader: {
    modules: ["node_modules", "./sy-loader"],
  },
};
