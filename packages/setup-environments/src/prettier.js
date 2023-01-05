'use strict';

const os = require('os');
const path = require('path');
const fs = require('fs-extra');

const prettierConfig = require('@environments/prettier-config');

const PRETTIER_IGNORE = [
  '# Dependency directories',
  'node_modules/',
  '',
  '# Auto-generated files',
  'package-lock.json',
].join('\n');

// TODO: Use peerDependencies for install

function setupPrettier(root) {
  const config = JSON.stringify(prettierConfig, null, 2);

  fs.writeFileSync(path.join(root, '.prettierrc'), config + os.EOL);
  fs.writeFileSync(path.join(root, '.prettierignore'), PRETTIER_IGNORE + os.EOL);

  return ['prettier'];
}

module.exports = {
  setupPrettier,
};
