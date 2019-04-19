# #4 WebPack

## WebPack이란?

![webPack_logo](./image/02_webPack.jpg)

> 웹 서비스 개발에서 JavaScript의 비중이 높아지면서 늘어난 방대한 코드를 유지 및 보수에 대처하기 위해 여러 도구가 있는데 그 중 하나가 `WebPack`이다.

## Webpack Core Concept

#### Entry

- dependency graph를 만들기 위해 필요한 Input Source입니다.
- 직/간접적으로 의존성을 가진 모듈들을 이해합니다.
- 여러개의 entry가 존재할 수 있습니다.
- Default value : ./src/index.js

```JS
// Entry File load
module.exports = {
  entry: './path/to/my/entry/file.js'
};
```

#### Output

- Webpack이 생성한 bundles의 결과물의 위치를 지정할 수 있습니다.
- Default value : ./dist/main.js

```JS
// path module require
const path = require('path');

module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    // resolve => 경로 생성해줌 ex) __dirname + / + dist
    path: path.resolve(__dirname, 'dist'),
    // Save File Name
    filename: 'my-first-webpack.bundle.js'
  }
};
```

#### Loaders

- Webpack은 오직 Javascript와 Json만 이해할 수 있는 단점이 있습니다.
- Loader는 다른 Type의 파일을 Webpack이 이해하고 처리가능한 모듈로 변환시키는 작업을 담당합니다.

```JS
const path = require('path');

module.exports = {
  output: {
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
        //.txt file 분류하기
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  }
};
```

#### Plugins

- Loader가 변환하는 동안 Plugin은 bundle optimization, asset management and injection of environment과 같은 일을 진행할 수 있습니다.

```JS
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};
```

#### Mode

- 다양한 Profile로 지정하여 진행할 수 있습니다.
- Default value : production

```JS
// 여러가지가 있음
// ex) 1. development 2. production
module.exports = {
  mode: 'production'
};
```

##### 참고 사이트

- [Nesoy Blog](https://nesoy.github.io/articles/2019-02/Webpack)
