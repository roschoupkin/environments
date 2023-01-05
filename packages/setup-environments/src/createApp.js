'use strict';

const os = require('os');
const path = require('path');
const fs = require('fs-extra');
const chalk = require('chalk');

const hasAbilityToCreateApp = require('./hasAbilityToCreateApp');

function createApp(name) {
  const root = path.resolve(name);
  const appName = path.basename(root);

  fs.ensureDirSync(name);
  if (!hasAbilityToCreateApp(root, name)) {
    throw Error(`Can't create an app ${appName} in ${root}`);
  }

  console.log(`Creating a new app in ${chalk.green(root)}`);

  const packageJsonTemplate = {
    private: true,
    name: appName,
    version: '0.1.0',
  };

  const packageJson = JSON.stringify(packageJsonTemplate, null, 2);

  fs.writeFileSync(path.join(root, 'package.json'), packageJson + os.EOL);

  return {
    root,
    appName,
  };
}

module.exports = createApp;
