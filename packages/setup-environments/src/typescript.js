'use strict';

const baseConfig = require('@environments/typescript-config/tsconfig.base.json');
const nodeConfig = require('@environments/typescript-config/tsconfig.node.json');
const reactConfig = require('@environments/typescript-config/tsconfig.react.json');
const libraryConfig = require('@environments/typescript-config/tsconfig.react.json');
const esLibraryConfig = require('@environments/typescript-config/tsconfig.react.json');

const { makeWriteFileSync, stringifyJSON } = require('./files');

const PACKAGES = ['typescript', 'tslib'];

function init(root, kind) {
  const writeFileSync = makeWriteFileSync(root);

  writeFileSync('tsconfig.base.json', stringifyJSON(baseConfig));

  switch (kind) {
    case 'react': {
      writeFileSync('tsconfig.json', stringifyJSON(reactConfig));
      break;
    }
    case 'library': {
      writeFileSync('tsconfig.json', stringifyJSON(libraryConfig));
      break;
    }
    case 'es-library': {
      writeFileSync('tsconfig.json', stringifyJSON(esLibraryConfig));
      break;
    }
    default: {
      writeFileSync('tsconfig.json', stringifyJSON(nodeConfig));
      break;
    }
  }
}

module.exports = {
  init,
  packages: PACKAGES,
};
