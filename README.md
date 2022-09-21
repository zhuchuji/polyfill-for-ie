# Polyfill For IE
An example project built with babel to polyfill for IE.

### Getting started

```bash
yarn
```

### Build

```bash
# build with webpack
yarn run webpack-build

# build with rollup
yarn run rollup-build
```

### Test
Build the bundle first and then open `index.html` with ie.

### Keypoint: babel config
We must set `@babel/preset-env` with options `{ useBuiltIns: 'usage', corejs: 3 }` to allow automatically polyfill unsupported features. Config details see: https://babeljs.io/docs/en/babel-preset-env#usebuiltins
Besides we should add `core-js` as dependencies.

`.babelrc.js`:
```javascript
module.exports = {
  "presets": [
    [
      "@babel/preset-env",
      {
        useBuiltIns: 'usage',
        corejs: 3,
      }
    ],
    "@babel/preset-typescript"
  ]
}
```