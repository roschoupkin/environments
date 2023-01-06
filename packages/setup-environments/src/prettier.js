'use strict';

const os = require('os');

const prettierConfig = require('@environments/prettier-config');
const { makeWriteFileSync, stringifyJSON } = require('./files');

const PACKAGES = ['prettier'];

const PRETTIER_IGNORE_CONTENT = [
  '# Dependency directories',
  'node_modules/',
  '',
  '# Auto-generated files',
  'package-lock.json',
].join('\n');

function init(root) {
  const writeFileSync = makeWriteFileSync(root);

  writeFileSync('.prettierrc', stringifyJSON(prettierConfig));
  writeFileSync('.prettierignore', PRETTIER_IGNORE_CONTENT + os.EOL);
}

module.exports = {
  init,
  packages: PACKAGES,
};
