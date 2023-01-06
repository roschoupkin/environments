'use strict';

const { Command } = require('commander');

const npm = require('./src/npm');
const pkg = require('./package.json');
const app = require('./src/app');
const typescript = require('./src/typescript');
const prettier = require('./src/prettier');
const eslint = require('./src/eslint');

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
      const {
        typescript: hasTypescript = 0,
        prettier: hasPrettier = 0,
        eslint: hasEslint = 0,
        kind,
      } = options;

      try {
        const packages = [];

        const { root } = app.init(name);

        process.chdir(root);

        if (hasTypescript) {
          typescript.init(root, kind);
          packages.push(...typescript.packages);
        }

        if (hasPrettier) {
          prettier.init(root);
          packages.push(...prettier.packages);
        }

        if (hasEslint) {
          eslint.init(root, { hasTypescript, hasPrettier, kind });
          packages.push(...eslint.packages);
        }

        await npm('i', '-D', ...new Set(packages));
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
