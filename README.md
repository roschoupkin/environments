# Examples of environment configurations

This is a sample project showing how we can set up project rules
Also work with [npm monorepositories](https://docs.npmjs.com/cli/v7/using-npm/workspaces)

This project uses itself to validate commit messages, code styles, and can format code

## Project packages

- [@environments/commitlint-config](packages/commitlint) – configuration example for [commitlint]
- [@environments/eslint-config](packages/eslint) – configuration example for [eslint]
- [@environments/prettier-config](packages/prettier) – configuration example for [prettier]
- [@environments/browserlist-config](packages/browserlist) – configuration example for [browserlist]
- [@environments/changelog-config](packages/changelog) – configuration example for [changelog]

### It's still in production, but you can try changing the code or adding a new package to see the configurations in action.

[commitlint]: https://commitlint.js.org/
[eslint]: https://eslint.org/
[prettier]: https://prettier.io/
[browserlist]: https://github.com/browserslist/browserslist
[changelog]: https://www.conventionalcommits.org/en/v1.0.0/
