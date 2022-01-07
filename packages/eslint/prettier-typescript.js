'use strict';

module.exports = {
  extends: ['prettier'],
  rules: {
    'curly': 'error',
    'no-tabs': 'error',
    '@typescript-eslint/quotes': [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: false },
    ],
  },
};
