'use strict';

const fs = require('fs');
const chalk = require('chalk');
const path = require('path');

const VALID_FILES_SET = new Set([
  '.DS_Store',
  '.git',
  '.gitattributes',
  '.gitignore',
  '.gitlab-ci.yml',
  '.hgcheck',
  '.hgignore',
  '.idea',
  '.npmignore',
  'LICENSE',
  'README.md',
  'Thumbs.db',
]);

const ERROR_LOG_FILES_LIST = ['npm-debug.log', 'yarn-error.log', 'yarn-debug.log'];

const isErrorLog = (file) => ERROR_LOG_FILES_LIST.some((pattern) => file.startsWith(pattern));

function cleanErrorLogs(root) {
  fs.readdirSync(root).forEach((file) => {
    if (isErrorLog(file)) {
      fs.removeSync(path.join(root, file));
    }
  });
}

function hasAbilityToCreateApp(root, name) {
  const conflicts = fs
    .readdirSync(root)
    .filter((file) => !VALID_FILES_SET.has(file))
    .filter((file) => !isErrorLog(file));

  if (conflicts.length > 0) {
    console.log(`The directory ${chalk.red(name)} contains files that could conflict:`);

    for (const file of conflicts) {
      try {
        const stats = fs.lstatSync(path.join(root, file));
        if (stats.isDirectory()) {
          console.log(`${chalk.gray(`${file}/`)}`);
        } else {
          console.log(`${file}`);
        }
      } catch (e) {
        console.log(`${file}`);
      }
    }

    return false;
  }

  return true;
}

module.exports = { hasAbilityToCreateApp, cleanErrorLogs };
