'use strict';
const path = require('path');
const fs = require('fs');

const { workspaces } = require(path.join(process.cwd(), 'package.json'));

async function getPackages() {
  const getDirectories = (files) =>
    files.filter((file) => file.isDirectory()).map((directory) => directory.name);

  return new Promise((resolve) => {
    const directories = [];
    for (const ws of workspaces) {
      fs.promises.readdir(ws.replace(/\/\*$/, ''), { withFileTypes: true }).then((files) => {
        directories.push(...getDirectories(files));
      });
    }
    resolve(directories);
  });
}

module.exports = {
  parserPreset: '@environments/changelog-config',
  rules: {
    'body-leading-blank': [1, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 120],
    'scope-case': [2, 'always', 'lower-case'],
    'scope-enum': () => getPackages().then((packages) => [2, 'always', packages]),
    'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'ci',
        'build',
        'chore',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
      ],
    ],
    'references-empty': [0, 'never'],
  },
};
