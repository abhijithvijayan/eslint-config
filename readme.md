<h1 align="center">eslint-config</h1>
<p align="center">My shared ESLint & Prettier configuration for projects</p>
<div align="center">
  <a href="https://www.npmjs.com/package/@abhijithvijayan/eslint-config">
    <img src="https://img.shields.io/npm/v/@abhijithvijayan/eslint-config" alt="NPM" />
  </a>
  <a href="https://github.com/abhijithvijayan/eslint-config/blob/main/license">
    <img src="https://img.shields.io/github/license/abhijithvijayan/eslint-config.svg" alt="LICENSE" />
  </a>
  <a href="https://twitter.com/intent/tweet?text=Check%20out%20eslint-config%21%20by%20%40_abhijithv%0A%0AA%20shared%20ESLint%20%26%20Prettier%20configuration%20with%20TypeScript%20%26%20React%20support.%20https%3A%2F%2Fgithub.com%2Fabhijithvijayan%2Feslint-config%20%0A%0A%23javascript%20%23react%20%23typescript%20%23eslint">
     <img src="https://img.shields.io/twitter/url/http/shields.io.svg?style=social" alt="TWEET" />
  </a>
</div>
<h3 align="center">🙋‍♂️ Made by <a href="https://twitter.com/_abhijithv">@abhijithvijayan</a></h3>
<p align="center">
  Donate:
  <a href="https://www.paypal.me/iamabhijithvijayan" target='_blank'><i><b>PayPal</b></i></a>,
  <a href="https://www.patreon.com/abhijithvijayan" target='_blank'><i><b>Patreon</b></i></a>
</p>
<p align="center">
  <a href='https://www.buymeacoffee.com/abhijithvijayan' target='_blank'>
    <img height='36' style='border:0px;height:36px;' src='https://bmc-cdn.nyc3.digitaloceanspaces.com/BMC-button-images/custom_images/orange_img.png' border='0' alt='Buy Me a Coffee' />
  </a>
</p>
<hr />

❤️ it? ⭐️ it on [GitHub](https://github.com/abhijithvijayan/eslint-config/stargazers) or [Tweet](https://twitter.com/intent/tweet?text=Check%20out%20eslint-config%21%20by%20%40_abhijithv%0A%0AA%20shared%20ESLint%20%26%20Prettier%20configuration%20with%20TypeScript%20%26%20React%20support.%20https%3A%2F%2Fgithub.com%2Fabhijithvijayan%2Feslint-config%20%0A%0A%23javascript%20%23react%20%23typescript%20%23eslint) about it.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Other Configs](#other-configs)
- [Override](#override)
- [With VS Code](#with-vs-code)
- [Issues](#issues)
  - [🐛 Bugs](#-bugs)
- [License](#license)

## Features

The config includes these plugins by default:

- [eslint-plugin-import-x](https://github.com/un-ts/eslint-plugin-import-x)
- [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
- [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react)
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)
- [eslint-plugin-n](https://github.com/eslint-community/eslint-plugin-n)

## Installation

```sh
npm install --save-dev @abhijithvijayan/eslint-config
```

Install the required peer dependencies:

```sh
npm install --save-dev eslint eslint-config-prettier eslint-plugin-import-x eslint-plugin-prettier globals prettier
```

For TypeScript support, also install:

```sh
npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser typescript
```

For React support, also install:

```sh
npm install --save-dev eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
```

For Node.js support, also install:

```sh
npm install --save-dev eslint-plugin-n
```

## Usage

This package uses ESLint's [flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new) format. Create an `eslint.config.js` (or `eslint.config.mjs`) file in your project root:

```js
import baseConfig from '@abhijithvijayan/eslint-config';

export default [
  ...baseConfig,
  // your overrides
];
```

## Other Configs

This config also exposes `react`, `node`, and `typescript` configs that I use often.

### TypeScript

```js
import typescriptConfig from '@abhijithvijayan/eslint-config/typescript';

export default [
  ...typescriptConfig,
  // your overrides
];
```

### Node.js

It is to be used in combination with the base config (recommended):

```js
import baseConfig from '@abhijithvijayan/eslint-config';
import nodeConfig from '@abhijithvijayan/eslint-config/node';

export default [
  ...baseConfig, // or typescriptConfig
  ...nodeConfig,
  // your overrides
];
```

### React

It is to be used in combination with the base config (recommended):

```js
import baseConfig from '@abhijithvijayan/eslint-config';
import reactConfig from '@abhijithvijayan/eslint-config/react';

export default [
  ...baseConfig, // or typescriptConfig
  ...reactConfig,
  // your overrides
];
```

### Optional

- To lint your files, you can add the following scripts to your `package.json`:

    ```json
    "scripts": {
        "lint": "eslint .",
        "lint:fix": "eslint . --fix"
    },
    ```

- Add files/directories to ignore in your `eslint.config.js`:

    ```js
    export default [
      {
        ignores: ['node_modules', 'dist', '.yarn', '.pnp.js'],
      },
      ...baseConfig,
    ];
    ```

<hr />

## Override

If you'd like to override `eslint` or `prettier` settings, you can add the rules in your `eslint.config.js` file:

```js
import baseConfig from '@abhijithvijayan/eslint-config';

export default [
  ...baseConfig,
  {
    rules: {
      'no-console': 'off',
      'prettier/prettier': [
        'error',
        {
          bracketSpacing: true,
          printWidth: 120,
          semi: true,
          singleQuote: true,
          tabWidth: 4,
          trailingComma: 'all',
          useTabs: false,
        },
      ],
    },
  },
];
```

## With VS Code

To show lint errors in your editor, you'll need to configure your editor.

1. Install the [ESLint package](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. Install the [Prettier package](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
3. Now we need to setup some VS Code settings via `Code/File` → `Preferences` → `Settings`. It's easier to enter these settings while editing the `settings.json` file, so click the `{}` icon in the top right corner:

    ```json
    "editor.formatOnSave": true,
    "[javascript]": {
      "editor.formatOnSave": false
    },
    "[javascriptreact]": {
      "editor.formatOnSave": false
    },
    "[typescript]": {
      "editor.formatOnSave": false
    },
    "[typescriptreact]": {
      "editor.formatOnSave": false
    },
    "editor.codeActionsOnSave": {
        "source.fixAll": "explicit",
        "source.fixAll.eslint": "explicit"
    },
    "prettier.disableLanguages": ["javascript", "javascriptreact", "typescript", "typescriptreact"],
    ```

## Issues

_Looking to contribute? Look for the [Good First Issue](https://github.com/abhijithvijayan/eslint-config/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3A%22good+first+issue%22)
label._

### 🐛 Bugs

Please file an issue [here](https://github.com/abhijithvijayan/eslint-config/issues/new) for bugs, missing documentation, or unexpected behavior.

[**See Bugs**](https://github.com/abhijithvijayan/eslint-config/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3A%22type%3A+bug%22)

### TypeScript Config

- Shared TypeScript Configuration - [`@abhijithvijayan/tsconfig`](https://www.npmjs.com/package/@abhijithvijayan/tsconfig)

## License

MIT © [Abhijith Vijayan](https://abhijithvijayan.in)
