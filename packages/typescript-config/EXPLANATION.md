# Explanation of tsconfig file

**NOTE:** You ~~can~~ should read the [official documentation](https://www.typescriptlang.org/tsconfig) for full details.

## Top level options

- `files` – Specifies allow list of files to include in the program. An error occurs if any of the files can’t be found.
- `extends` – See information below
  - The value of extends is a string which contains a path to another configuration file to inherit from.
  - The configuration from the base file are loaded first, then overridden by those in the inheriting config file. All relative paths found in the configuration file will be resolved relative to the configuration file they originated in.
- `include` – Specifies an array of filenames or patterns to include in the program. These filenames are resolved relative to the directory containing the tsconfig.json file.
- `exclude` – Specifies an array of filenames or patterns that should be skipped when resolving include.
- `references` – See information below
  - An array of objects that specifies projects to reference
  - The `path` property of each reference can point to a directory containing a tsconfig.json file, or to the config file itself (which may have any name).
  - Importing modules from a referenced project will instead load its output declaration file (.d.ts).
  - If the referenced project produces an `outFile`, the output file .d.ts file’s declarations will be visible in this project.
  - Build mode will automatically build the referenced project if needed.
- `compilerOptions` – These options make up the bulk of TypeScript’s configuration and it covers how the language should work.
- `watchOptions` – You can configure how TypeScript --watch works.
- `typeAcquisition` – See information below
  - Type Acquisition is only important for JavaScript projects.
  - In TypeScript projects you need to include the types in your projects explicitly.
  - For JavaScript projects, the TypeScript tooling will download types for your modules in the background and outside of your node_modules folder.

#### include and exclude support wildcard characters:

- `*` matches zero or more characters (excluding directory separators)
- `?` matches any one character (excluding directory separators)
- `**/` matches any directory nested to any level

## Compiler options (here only useful)

### Target – `target`

Modern browsers support all `ES6` features, so ES6 is a good choice. You might choose to set a lower target if your code is deployed to older environments, or a higher target if your code is guaranteed to run in newer environments.

**Allowed values:** `es3`, `es5`, `es6`/`es2015`, `es2016`, `es2017`, `es2018`, `es2019`, `es2020`, `es2021`, `esnext`

#### At the moment the standard is ES6. [Support is 94.06%](https://caniuse.com/es6)

### Module – `module`

Sets the module system for the program. [See handbook with examples](https://www.typescriptlang.org/tsconfig#module)

Starting with ECMAScript 2015, JavaScript has a concept of modules. TypeScript shares this concept.

Modules are executed within their own scope, not in the global scope; this means that variables, functions, classes, etc. declared in a module are not visible outside the module unless they are explicitly exported using one of the export forms.

**Default values:**

- `CommonJS` if target is `ES3` or `ES5`
- `ES6`/`ES2015` otherwise.

**Allowed values:** `none`, `commonjs`, `amd`, `umd`, `system`, `es6`/`es2015`, `es2020`, `es2022`, `esnext`, `node12`, `nodenext`

#### Most used is commonjs and esnext:

Code at typescript:

```ts
import { PI_VALUE } from './constants';

export const TWO_PI = PI_VALUE * 2;
```

In `commonjs` compiles to:

```js
// js file will be:
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.TWO_PI = void 0;
const constants_1 = require('./constants');
exports.TWO_PI = constants_1.PI_VALUE * 2;

// d.ts file will be:
// export declare const TWO_PI: number;
```

In `esnext` compiles to:

```js
// js file will be:
import { PI_VALUE } from './constants';
export const TWO_PI = PI_VALUE * 2;

// d.ts file will be:
// export declare const TWO_PI: number;
```

### Lib – `lib`

TypeScript includes a default set of type definitions for built-in JS APIs.

TypeScript also includes APIs for newer JS features matching the target you specify; for example the definition for Map is available if target is ES6 or newer.

**You may want to change these for a few reasons:**

- Your program doesn’t run in a browser, so you don’t want the `dom` type definitions
- Your runtime platform provides certain JavaScript API objects (maybe through polyfills), but doesn’t yet support the full syntax of a given ECMAScript version
- You have polyfills or native implementations for some, but not all, of a higher level ECMAScript version

| Lib name   | Contents                                                                                                                                |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| ES5        | Core definitions for all ES3 and ES5 functionality                                                                                      |
| ES2015     | Additional APIs available in ES2015 (also known as ES6) - array.find, Promise, Proxy, Symbol, Map, Set, Reflect, etc.                   |
| ES6        | Alias for “ES2015”                                                                                                                      |
| ES2016     | Additional APIs available in ES2016 - array.include, etc.                                                                               |
| ES7        | Alias for “ES2016”                                                                                                                      |
| ES2017     | Additional APIs available in ES2017 - Object.entries, Object.values, Atomics, SharedArrayBuffer, date.formatToParts, typed arrays, etc. |
| ES2018     | Additional APIs available in ES2018 - async iterables, promise.finally, Intl.PluralRules, regexp.groups, etc.                           |
| ES2019     | Additional APIs available in ES2019 - array.flat, array.flatMap, Object.fromEntries, string.trimStart, string.trimEnd, etc.             |
| ES2020     | Additional APIs available in ES2020 - string.matchAll, etc.                                                                             |
| ES2021     | Additional APIs available in ES2021 - promise.any, string.replaceAll etc.                                                               |
| ESNext     | Additional APIs available in ESNext - This changes as the JavaScript specification evolves                                              |
| DOM        | DOM definitions - window, document, etc.                                                                                                |
| WebWorker  | APIs available in WebWorker contexts                                                                                                    |
| ScriptHost | APIs for the Windows Script Hosting System                                                                                              |

Also, you can add [individual library components](https://www.typescriptlang.org/tsconfig#individual-library-components), but full list you can find in the [TypeScript source code](https://github.com/microsoft/TypeScript/tree/main/lib).
