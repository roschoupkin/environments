'use strict';

const fs = require('fs-extra');
const path = require('path');

// const base = require('@environments/eslint-config/base');
// const browser = require('@environments/eslint-config/browser');
// const jest = require('@environments/eslint-config/jest');
// const node = require('@environments/eslint-config/node');
// const prettier = require('@environments/eslint-config/prettier');
// const prettierTypescript = require('@environments/eslint-config/prettier-typescript');
// const react = require('@environments/eslint-config/react');
const typescript = require('@environments/eslint-config/typescript');

const { makeWriteFileSync, stringifyJSON } = require('./files');

const PACKAGES = ['eslint'];

const CONFIGS_DIR = 'eslint';
const PRESETS_DIR = path.join(CONFIGS_DIR, 'preset');

function init(root, { hasTypescript }) {
  fs.ensureDirSync(CONFIGS_DIR);
  fs.ensureDirSync(PRESETS_DIR);

  const writeFileSync = makeWriteFileSync(root);
  // const writeConfigSync = makeWriteFileSync(path.join(root, CONFIGS_DIR));

  if (hasTypescript) {
    fs.copySync('../../eslint-config/typescript', path.join(root, CONFIGS_DIR), {
      overwrite: true,
    });
    const { extends: presets } = typescript;
    for (const preset of presets) {
      const dest = path.join(root, PRESETS_DIR, preset.split('/').slice(-1)[0]);
      fs.copySync(preset, dest, { overwrite: true });
    }
  }

  const eslintrc = {
    root: true,
    extends: ['./eslint/typescript.js'],
  };

  writeFileSync('.eslintrc.json', stringifyJSON(eslintrc));
}

module.exports = {
  init,
  packages: PACKAGES,
};
