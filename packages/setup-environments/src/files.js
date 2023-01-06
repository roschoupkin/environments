'use strict';

const os = require('os');
const path = require('path');
const fs = require('fs-extra');

const stringifyJSON = (json) => JSON.stringify(json, null, 2) + os.EOL;
const writeFileSync = (root, name, content) => fs.writeFileSync(path.join(root, name), content);

const makeWriteFileSync = (root) => (name, content) => writeFileSync(root, name, content);

module.exports = { stringifyJSON, writeFileSync, makeWriteFileSync };
