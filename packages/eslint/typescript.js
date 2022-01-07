'use strict';

module.exports = {
  extends: [require.resolve('./preset/typescript')],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/extensions': ['.ts', '.tsx', '.d.ts', '.js', '.jsx'],
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx', '.d.ts', '.js', '.jsx'],
      },
    },
  },
  rules: {
    'react/prop-types': 'off',
  },
};
