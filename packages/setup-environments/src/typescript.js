'use strict';

const os = require('os');
const path = require('path');
const fs = require('fs-extra');

const baseConfig = require('@environments/typescript-config/tsconfig.base.json');
const nodeConfig = require('@environments/typescript-config/tsconfig.node.json');
const reactConfig = require('@environments/typescript-config/tsconfig.react.json');
const libraryConfig = require('@environments/typescript-config/tsconfig.react.json');
const esLibraryConfig = require('@environments/typescript-config/tsconfig.react.json');

function setupTypescript(root, kind) {
  const packages = ['typescript', 'tslib'];

  fs.writeFileSync(
    path.join(root, 'tsconfig.base.json'),
    JSON.stringify(baseConfig, null, 2) + os.EOL
  );

  switch (kind) {
    case 'react': {
      fs.writeFileSync(
        path.join(root, 'tsconfig.json'),
        JSON.stringify(reactConfig, null, 2) + os.EOL
      );
      break;
    }
    case 'library': {
      fs.writeFileSync(
        path.join(root, 'tsconfig.json'),
        JSON.stringify(libraryConfig, null, 2) + os.EOL
      );
      break;
    }
    case 'es-library': {
      fs.writeFileSync(
        path.join(root, 'tsconfig.json'),
        JSON.stringify(esLibraryConfig, null, 2) + os.EOL
      );
      break;
    }
    default: {
      fs.writeFileSync(
        path.join(root, 'tsconfig.json'),
        JSON.stringify(nodeConfig, null, 2) + os.EOL
      );
      break;
    }
  }

  return packages;
}

module.exports = {
  setupTypescript,
};
