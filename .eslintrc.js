'use strict';

module.exports = {
  root: true,
  extends: [
    require.resolve('@environments/eslint-config/node'),
    require.resolve('@environments/eslint-config/prettier'),
  ],
};
