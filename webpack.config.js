const path = require("path")

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./build")
  },
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
          "css-loader"
        ]
      }
    ]
  }
}