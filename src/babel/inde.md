### babel

@babel/core | @babel/cli

@babel/preset-env

babel-loader

#### polyfill

```js
// babel.config.js
{
  presets: [
    [ "@babel/preset-env",
      {
        useBuiltIns: "usage",
        corejs: 3, // 默认使用的是2版本，打包的时候会报错
      },]
    ],
  ];
}
```

##### plugin-transform-runtime(防止工具库污染其它代码，通常在写工具库时使用)

编写工具库时使用 @babel/plugin-transform-runtime 来代替 polyfill

```js
{
  presets: [
    [ "@babel/preset-env",
    {
      useBuiltIns: "usage",
      corejs: 3, // 默认使用的是2版本，打包的时候会报错
    },]
  ],
  ],
  plugins: [
    ["@babel/plugin-transform-runtime", {
      corejs: 3, // 选安装对应版本 @babal/runtime-corejs3
    }]
  ]
}

```

#### react jsx 支持(@babal/preset-react)

```js
{
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        corejs: 3, // 默认使用的是2版本，打包的时候会报错
      },
    ],
  ],
    ["@babel/preset-react"];
}
```

#### TypeScript 支持

<!-- ts-loadeer -->

使用 babel-loader 就可以

```js
// typescript-compiler: tsc --init 自动生成 tsconfig.json
// 可以使用插件@babel/tranform-typescript来编译ts，但是更推荐使用@babel-preset-typescript
{
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        corejs: 3, // 默认使用的是2版本，打包的时候会报错
      },
    ],
    ["@babel/preset-react"],
    ["@babel-preset-typescript"]
  ],
}
```

##### ts-loadeer 和 babel-loader 的选择

```
  babel-loader:
    1. 可以将ts转化成js，并且可以实现polyfill的功能
    2. 但是在编译过程中不会对类型错误进行检测
  ts-loader:
    1. 只能将ts转化成js， 需要借助与babel来完成polufill的填充功能
    2. 会对类型错误进行检测

在使用babel-loader是在package.json中添加tscheck来进行检测
  "type-check": "tsc --noEmit" // --noEmit没有输出 不会多出文件
  // "type-check-watch": "tsc --noEmit --warch" // 实时监听ts文件状态
```

#### ESLint(静态代码分析工具：提示错误或者警告)

eslint --init

```js
 {
  rules:  {
    // 0-off 1-warn 2-error
    // "no-unused-vars": 0
    "no-unused-vars": 'off',
    "quotes": [
      "error",
      "double"
    ]
  }
 }

```

#### prettier(帮助我们自动修复)

```js
//  .prettierrc
{
  "priteWidth": 40 // 超过xx换行
  "singleQuote": true,
}
```
