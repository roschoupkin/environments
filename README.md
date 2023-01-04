# Examples of environment configurations

This is a sample project showing how we can set up project rules

Also works with [npm monorepositories](https://docs.npmjs.com/cli/v7/using-npm/workspaces)

This project uses itself to validate commit messages, code styles, and can format code

## Project packages

- [@environments/eslint-config](packages/eslint-config) – configuration example for [eslint]
- [@environments/prettier-config](packages/prettier-config) – configuration example for [prettier]
- [@environments/changelog-config](packages/changelog-config) – configuration example for [changelog]
- [@environments/typescript-config](packages/typescript-config) – configuration example for [tsconfig]
- [@environments/commitlint-config](packages/commitlint-config) – configuration example for [commitlint]
- [@environments/browserlist-config](packages/browserlist) – configuration example for [browserlist]

### It is WIP, but you can try to change the code or adding a new package to see the configurations in action.

[eslint]: https://eslint.org/
[prettier]: https://prettier.io/
[commitlint]: https://commitlint.js.org/
[tsconfig]: https://www.typescriptlang.org/tsconfig
[browserlist]: https://github.com/browserslist/browserslist
[changelog]: https://www.conventionalcommits.org/en/v1.0.0/
