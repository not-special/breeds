# Using ES6 modules
1) Add `"type":"module"` to `package.json`
2) Create file `babel.config.cjs` and add the following: 
```js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      { targets: { node: 'current' } },
    ]
  ],
};
```
3) Run `$ npm install --save-dev babel-jest @babel/core @babel/preset-env`
