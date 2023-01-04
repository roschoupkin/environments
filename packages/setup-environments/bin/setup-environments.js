#!/usr/bin/env node

'use strict';

/* eslint-disable no-var -- It should work in an old version of Node */

var semver = require('semver');
var pkg = require('../package.json');

/* eslint-enable no-var -- Node 16+ */

if (semver.satisfies(process.version, pkg.engines.node)) {
  (async () => {
    try {
      // eslint-disable-next-line node/global-require -- We don't need to use require with a wrong version
      process.exitCode = await require('../cli')();
    } catch (error) {
      console.error('[setup-environments]', error);
      process.exitCode = 1;
    }
  })();
} else {
  console.error(
    [
      '[setup-environments]',
      'You should use node version',
      pkg.engines.node,
      'instead of',
      process.version,
    ].join(' ')
  );
  process.exitCode = 1;
}
