'use strict';

module.exports = {
  extends: [require.resolve('./base'), require.resolve('./preset/node')],
  plugins: ['node'],
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    sourceType: 'script',
    ecmaVersion: 2018,
    ecmaFeatures: {
      globalReturn: true,
    },
  },
  settings: {
    polyfills: ['external'],
  },
  rules: {
    'no-console': 'off',
  },
};
