'use strict';

const spawn = require('cross-spawn');

function npm(...args) {
  try {
    return spawn('npm', args, { stdio: 'inherit' });
  } catch (error) {
    return error.stdout;
  }
}

module.exports = npm;
