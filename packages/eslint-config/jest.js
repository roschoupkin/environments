'use strict';

module.exports = {
  extends: [require.resolve('./preset/jest'), require.resolve('./preset/jest-formatting')],
  plugins: ['jest', 'jest-formatting'],
  env: {
    'jest/globals': true,
  },
};
