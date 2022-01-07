'use strict';

module.exports = {
  rules: {
    'jest-formatting/padding-around-all': 'off',
    'jest-formatting/padding-around-after-all-blocks': 'off',
    'jest-formatting/padding-around-after-each-blocks': 'off',
    'jest-formatting/padding-around-before-all-blocks': 'off',
    'jest-formatting/padding-around-before-each-blocks': 'off',
    'jest-formatting/padding-around-describe-blocks': 'off',
    'jest-formatting/padding-around-expect-groups': 'off',
    'jest-formatting/padding-around-test-blocks': 'off',
  },
  overrides: [
    {
      files: ['**/__tests__/**'],
      rules: {
        'jest-formatting/padding-around-after-all-blocks': 'error',
        'jest-formatting/padding-around-after-each-blocks': 'error',
        'jest-formatting/padding-around-before-all-blocks': 'error',
        'jest-formatting/padding-around-before-each-blocks': 'error',
        'jest-formatting/padding-around-describe-blocks': 'error',
        'jest-formatting/padding-around-expect-groups': 'error',
        'jest-formatting/padding-around-test-blocks': 'error',
      },
    },
  ],
};
