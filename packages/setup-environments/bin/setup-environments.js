#!/usr/bin/env node

'use strict';

const version = process.versions.node;
const major = version.split('.')[0];

if (major < 14) {
  console.error(
    ['[setup-environments]', 'You should use node version 14', 'instead of', version].join(' ')
  );

  process.exitCode = 1;
}

const { init } = require('../cli');

// TODO: Add additional create script and this is setup

(async () => {
  try {
    process.exitCode = await init();
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  }
})();
