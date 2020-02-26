// The babel-preset-gatsby comes with react, nullish coalescing, optional chainging etc.
// https://github.com/gatsbyjs/gatsby/tree/master/packages/babel-preset-gatsby#packages
// We only need to add the typescript preset
const babelOptions = {
  presets: ['babel-preset-gatsby', '@babel/preset-typescript'],
};

module.exports = require('babel-jest').createTransformer(babelOptions);
