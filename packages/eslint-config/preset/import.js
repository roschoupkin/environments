'use strict';

module.exports = {
  rules: {
    // Static analysis
    'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],
    'import/named': 'off',
    'import/default': 'off',
    'import/namespace': 'error',
    'import/no-restricted-paths': 'off',
    'import/no-absolute-path': 'error',
    'import/no-cycle': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-internal-modules': 'off',
    'import/no-relative-parent-imports': 'off',
    'import/no-webpack-loader-syntax': 'error',
    'import/no-self-import': 'error',
    'import/no-unused-modules': 'off',
    'import/no-relative-packages': 'off',

    // Helpful warnings
    'import/export': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-deprecated': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-mutable-exports': 'error',
    'import/no-useless-path-segments': 'error',

    // Module systems
    'import/unambiguous': 'off',
    'import/no-commonjs': 'off',
    'import/no-amd': 'error',
    'import/no-nodejs-modules': 'off',
    'import/no-import-module-exports': 'error',

    // Style guide
    'import/first': ['error', 'absolute-first'],
    'import/no-duplicates': 'error',
    'import/no-namespace': 'off',
    'import/exports-last': 'off',
    'import/extensions': ['error', 'always', { js: 'never', ts: 'never', tsx: 'never' }],
    'import/order': [
      'error',
      {
        'alphabetize': {
          order: 'asc',
        },
        'groups': [['builtin', 'external'], ['internal', 'parent', 'sibling'], 'index'],
        'newlines-between': 'always',
      },
    ],
    'import/newline-after-import': 'error',
    'import/prefer-default-export': 'off',
    'import/max-dependencies': 'off',
    'import/no-unassigned-import': 'off',
    'import/no-named-default': 'error',
    'import/no-named-export': 'off',
    'import/no-default-export': 'off',
    'import/no-anonymous-default-export': 'off',
    'import/group-exports': 'off',
    'import/dynamic-import-chunkname': 'error',
  },
};
