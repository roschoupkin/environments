'use strict';

const prompt = require('prompt');
const { execa } = require('execa');

const schema = {
  properties: {
    typescript: {
      pattern: /^[yN]$/,
      warning: 'Must be "y" or "N"',
      description: 'Will you use typescript? (y/N)',
    },
    prettier: {
      pattern: /^[yN]$/,
      warning: 'Must be "y" or "N"',
      description: 'Will you use formatter? (y/N)',
    },
    eslint: {
      pattern: /^[yN]$/,
      warning: 'Must be "y" or "N"',
      description: 'Will you use linter? (y/N)',
    },
    eslint_node: {
      pattern: /^[yN]$/,
      warning: 'Must be "y" or "N"',
      description: 'Is it node application? (y/N)',
      ask: () => ['eslint', 'typescript'].some((key) => prompt.history(key).value === 'y'),
    },
    eslint_react: {
      pattern: /^[yN]$/,
      warning: 'Must be "y" or "N"',
      description: 'Is it react application? (y/N)',
      ask: () => ['eslint', 'typescript'].some((key) => prompt.history(key).value === 'y'),
    },
    eslint_library: {
      pattern: /^[yN]$/,
      warning: 'Must be "y" or "N"',
      description: 'Is it library? (y/N)',
      ask: () => ['eslint', 'typescript'].some((key) => prompt.history(key).value === 'y'),
    },
  },
};

const npm = async (...args) => {
  try {
    const result = await execa('npm', args);

    return result.stdout;
  } catch (error) {
    return error.stdout;
  }
};

prompt.start();

prompt.get(schema, async (error, result) => {
  if (error) {
    console.error(error);
    return 1;
  }

  const {
    typescript,
    prettier,
    eslint,
    eslint_node: eslintNode,
    eslint_react: eslintReact,
  } = result;

  if (prettier === 'y') {
    await npm('i', '-D', 'prettier');
  }

  if (eslint === 'y') {
    const packages = new Set([
      'eslint',
      'eslint-plugin-import',
      'eslint-plugin-compat',
      'eslint-plugin-import',
      'eslint-plugin-eslint-comments',
    ]);

    if (typescript === 'y') {
      packages.add('@typescript-eslint/eslint-plugin');
      packages.add('@typescript-eslint/parser');
    }

    if (eslintReact === 'y') {
      packages.add('eslint-plugin-react');
      packages.add('eslint-plugin-react-hooks');
    }

    if (eslintNode === 'y') {
      packages.add('eslint-plugin-node');
    }

    await npm('i', '-D', ...packages);
  }

  return 0;
});
