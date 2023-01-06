'use strict';

const path = require('path');
const fs = require('fs-extra');
const chalk = require('chalk');

const { stringifyJSON, writeFileSync } = require('./files');
const { hasAbilityToCreateApp, cleanErrorLogs } = require('./prepare');

function init(name) {
  const root = path.resolve(name);
  const appName = path.basename(root);

  fs.ensureDirSync(name);
  if (!hasAbilityToCreateApp(root, name)) {
    throw Error(`Can't create an app ${appName} in ${root}`);
  }
  cleanErrorLogs(root);

  console.log(`Creating a new app in ${chalk.green(root)}`);

  const packageJson = stringifyJSON({
    private: true,
    name: appName,
    version: '0.1.0',
  });

  writeFileSync(root, 'package.json', packageJson);

  return {
    root,
    appName,
  };
}

module.exports = { init };
