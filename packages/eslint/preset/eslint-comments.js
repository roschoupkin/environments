'use strict';

module.exports = {
  rules: {
    // Best Practices
    'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
    'eslint-comments/no-aggregating-enable': 'error',
    'eslint-comments/no-duplicate-disable': 'error',
    'eslint-comments/no-unlimited-disable': 'error',
    'eslint-comments/no-unused-disable': 'off',
    'eslint-comments/no-unused-enable': 'error',

    // Stylistic Issues
    'eslint-comments/no-restricted-disable': 'off',
    'eslint-comments/no-use': 'off',
    'eslint-comments/require-description': ['error', { ignore: ['eslint-enable'] }],
  },
};
