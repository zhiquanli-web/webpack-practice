module.exports = {
  module: "production",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new VueLoaderPlugin()
  ],
};
