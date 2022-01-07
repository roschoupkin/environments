'use strict';

const config = require('conventional-changelog-conventionalcommits');

const PROJECT = 'ENVIRONMENTS';

module.exports = config({
  issuePrefixes: [`${PROJECT}-`],
});
