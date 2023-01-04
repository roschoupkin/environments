'use strict';

module.exports = {
  extends: [
    require.resolve('./preset/errors'),
    require.resolve('./preset/best-practices'),
    require.resolve('./preset/strict'),
    require.resolve('./preset/variables'),
    require.resolve('./preset/formatting'),
    require.resolve('./preset/es'),
    require.resolve('./preset/compat'),
    require.resolve('./preset/eslint-comments'),
  ],
  plugins: ['compat', 'eslint-comments'],
};
