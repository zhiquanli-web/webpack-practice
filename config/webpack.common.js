// const path = require("path");
const resolveApp = require("./path");

module.exports = function (env) {
  console.log("env", env);
  const isProduction = env.production;
  process.env.production = isProduction //  在这里设置就可以在babelrc文件中取了
  return {
    // context: path.resolve(__dirname, './'), // 绝对路径
    // entry: "../src/main.js",
    entry: "./src/main.js", // entry写上相对路径是，并不是相对应文件所在的路径，而是相对于context配置的路径
    output: {
      // path: path.resolve(__dirname, "../build"),
      path: resolveApp("./build"),
    },
    resolve: {
      extensitions: [".wasm", ".mjs", ".js", ".json", ".ts", ".vue"], // 默认为['.wasm', '.mjs', '.js']
      alias: {
        // "@": path.resolve(__dirname, "../src"), // vue-cli默认配置
        "@": resolveApp("./src"), // vue-cli默认配置
      },
    },
  };
};
