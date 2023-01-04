# @environments/typescript-config

Configuration example for [tsconfig]. For more information you can read [EXPLANATION.md](EXPLANATION.md).

Below you will see an explanation of usage. **See rule "extends"**

## Usage explanation

### Web apps (react)

```json5
{
  extends: '@environments/typescript-config/tsconfig.react',
  compilerOptions: {
    rootDir: 'src',
    outDir: 'build',
    module: 'ESNext',
    // "jsx": "react-jsx", // React >= 17
    // "jsx": "react-jsxdev", // Dev build of React >= 17
  },
  include: ['src/index.ts'],
}
```

### Libraries

The shared library requires 2 builds: `CommonJS` and `ESNext`. Despite the fact that when building the main project
build with ES modules is used, various tools (for example, `Jest`) do not work with them and require
CommonJS module.

For CommonJS tsconfig:

```json5
{
  extends: '@environments/typescript-config/tsconfig.lib',
  compilerOptions: {
    rootDir: 'src',
    outDir: 'lib',
  },
  include: ['src/index.ts'],
}
```

For ESNext tsconfig:

```json5
{
  extends: '@environments/typescript-config/tsconfig.es',
  compilerOptions: {
    rootDir: 'src',
    outDir: 'es',
  },
  include: ['src/index.ts'],
}
```

### Node app

```json5
{
  extends: '@environments/typescript-config/tsconfig.node',
  compilerOptions: {
    rootDir: 'src',
    outDir: 'dist',
    target: 'ES2020',
    lib: ['ES2020'],
  },
  include: ['src/index.ts'],
}
```

[tsconfig]: https://www.typescriptlang.org/tsconfig
