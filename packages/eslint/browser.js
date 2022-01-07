'use strict';

module.exports = {
  extends: [require.resolve('./base'), require.resolve('./preset/import')],
  plugins: ['import'],
  env: {
    es6: true,
    browser: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
  },
  settings: {
    'import/ignore': ['\\.(json|css|png|svg)$'],
    'polyfills': ['external'],
  },
};
