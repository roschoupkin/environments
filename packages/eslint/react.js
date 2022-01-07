'use strict';

module.exports = {
  extends: [
    require.resolve('./browser'),
    require.resolve('./preset/react'),
    require.resolve('./preset/react-hooks'),
  ],
  plugins: ['react', 'react-hooks'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/extensions': ['.js', '.jsx'],
    'react': {
      version: 'detect',
      linkComponents: [{ name: 'Link', linkAttribute: 'to' }],
    },
  },
};
