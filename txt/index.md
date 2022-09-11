# webpack webpack-cli

## Entry(入口文件)

## Output(出口)

## Loader(用于特定的模块类型进行转换)

## Plugin(用于执行更加广泛的任务，比如打包优化、资源管理、环境变量注入等)

### devtool: none | false | eval | source-map | eval-source-map | inline-source-map | cheap=source-map | cheap-module-source-map

开发/测试阶段推荐使用 source-map 或 cheap-module-source-map

发布阶段: false 或缺省值(不写)

```js
{
  devtool: "eval"; // eval | source-map
}
```
