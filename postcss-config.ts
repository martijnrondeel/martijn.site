import lost from 'lost';
import pxtorem from 'postcss-pxtorem';
import autoprefixer from 'autoprefixer';

export const postCssPlugins = [
  lost(),
  pxtorem({
    rootValue: 16,
    unitPrecision: 5,
    propList: [
      'font',
      'font-size',
      'height',
      'line-height',
      'letter-spacing',
      'margin',
      'margin-top',
      'margin-left',
      'margin-bottom',
      'margin-right',
      'padding',
      'padding-top',
      'padding-left',
      'padding-bottom',
      'padding-right',
      'border-radius',
      'width',
      'max-width',
    ],
    selectorBlackList: [],
    replace: true,
    mediaQuery: false,
    minPixelValue: 0,
  }),
  autoprefixer(),
];
