'use strict';

const { Command } = require('commander');

const npm = require('./src/npm');
const pkg = require('./package.json');
const createApp = require('./src/createApp');
const { setupTypescript } = require('./src/typescript');
const { setupPrettier } = require('./src/prettier');
const { setupEslint } = require('./src/eslint');

async function init() {
  const program = new Command();

  program
    .name('setup-environments')
    .description('CLI to quick start new application')
    .version(pkg.version);

  program
    .argument('<string>', 'application name')
    .option('--kind <string>', 'kind of application', 'node')
    .option('--typescript', 'use typescript in application')
    .option('--prettier', 'use prettier in application')
    .option('--eslint', 'use prettier in application')
    .action(async (name, options) => {
      const original = process.cwd();
      const { typescript = 0, prettier = 0, eslint = 1, kind } = options;

      try {
        const packages = new Set();

        const { root } = createApp(name);

        process.chdir(root);

        if (typescript) {
          setupTypescript(root, kind).forEach((p) => packages.add(p));
        }

        if (prettier) {
          setupPrettier(root).forEach((p) => packages.add(p));
        }

        if (eslint) {
          setupEslint(root).forEach((p) => packages.add(p));
        }

        await npm('i', '-D', ...packages);
      } catch (error) {
        console.error(error);

        process.chdir(original);
        process.exitCode = 1;
      }
    });

  await program.parse();

  return 0;
}

module.exports = {
  init,
};
