<h1 align="center">eslint-config</h1>
<p align="center">My shared ESLint & Prettier configuration for projects</p>
<div align="center">
  <a href="https://www.npmjs.com/package/@abhijithvijayan/eslint-config">
    <img src="https://img.shields.io/npm/v/@abhijithvijayan/eslint-config" alt="NPM" />
  </a>
  <a href="https://travis-ci.org/abhijithvijayan/eslint-config">
    <img src="https://travis-ci.org/abhijithvijayan/eslint-config.svg?branch=main" alt="Travis Build" />
  </a>
  </a>
  <a href="https://david-dm.org/abhijithvijayan/eslint-config">
    <img src="https://img.shields.io/david/abhijithvijayan/eslint-config.svg?colorB=orange" alt="DEPENDENCIES" />
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

❤️ it? ⭐️ it on [GitHub](https://github.com/abhijithvijayan/eslint-config/stargazers)

## Features

The config includes these plugins by default:

- [import](https://github.com/benmosher/eslint-plugin-import)
- [jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
- [prettier](https://github.com/prettier/eslint-plugin-prettier)
- [react](https://github.com/yannickcr/eslint-plugin-react)
- [react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint)
- [eslint-plugin-node](https://github.com/mysticatea/eslint-plugin-node) from [v2.2.3](https://github.com/abhijithvijayan/eslint-config/issues/3#issuecomment-653062266)

## Breaking Changes

- Uses `@babel/eslint-parser` instead of `babel-eslint` from `v2.6.1` (See [migration guide](https://git.io/JtPOV))
- Uses Eslint v7 from v2.x.x (See [migration guide](https://git.io/JtPOo))
- Dropped usage `eslint-config-airbnb` in favour of `@abhijithvijayan/eslint-config-airbnb`

## Installation

```
# npm
npx install-peerdeps @abhijithvijayan/eslint-config --dev

# yarn
npx install-peerdeps @abhijithvijayan/eslint-config --dev --yarn
```

This will install the required `peerDependencies` for eslint

Note: Due to [this bug](https://github.com/eslint/eslint/issues/3458), you
need to have all the associated plugins installed as `devDependencies` to make things work.

## Usage

Add extends of the preferred base config to your `.eslintrc.json`:

```json
{
  "extends": [
    "@abhijithvijayan/eslint-config"
  ],
  "rules": {
    // your overrides
  }
}
```

## Other configs

This config also exposes `react`, `node`, and `typescript` configs that I use often.

### TypeScript

To use the ts configuration, install the `TypeScript` compiler:

```
# npm
npm install typescript --save-dev

# yarn
yarn add --dev typescript
```

`.eslintrc.json:`

```json
{
  "extends": [
    "@abhijithvijayan/eslint-config/typescript"
  ],
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "rules": {
    // your overrides
  },
}
```

### Node.js

It is to be used in combination with the base config (recommended)

`.eslintrc.json:`

```json
{
  "extends": [
    "@abhijithvijayan/eslint-config", // or "@abhijithvijayan/eslint-config/typescript",
    "@abhijithvijayan/eslint-config/node"
  ],
  "parserOptions": {
    // Uncomment both if you are using typescript with node
    // "project": "./tsconfig.json",
    // "sourceType": "module" // https://github.com/mysticatea/eslint-plugin-node#-configs
  },
  "rules": {
    // Uncomment if you are using typescript with node(ES Modules)
    // "node/no-unsupported-features/es-syntax": ["error", {
    //   "ignores": ["modules"]
    // }],

    // your other overrides
  },
}
```

### React

It is to be used in combination with the base config (recommended)

`.eslintrc.json:`

```json
{
  "extends": [
    "@abhijithvijayan/eslint-config", // or "@abhijithvijayan/eslint-config/typescript",
    "@abhijithvijayan/eslint-config/react"
  ],
  "parserOptions": {
    // Uncomment if you are using typescript configuration
    // "project": "./tsconfig.json"
  },
  "rules": {
    // your overrides
  }
}
```

#### With Create React App

Open your `package.json` and replace `"extends": "react-app"` with above config or remove `extends` entry and create a separate `.eslintrc.json` file(recommended)

### Optional

- To lint your files, you can add the following scripts to your `package.json`:

    ```json
    "scripts": {
        // other scripts
        "lint": "eslint . --ext .js,.ts,.tsx",
        "lint:fix": "eslint . --ext .js,.ts,.tsx --fix"
    },
    ```

- Add a `.eslintignore` file with my defaults

    ```
    node_modules
    dist            # typescript default output directory
    .yarn
    .pnp.js

    # other directories to skip linting
  ```

<hr />

## Override

If you'd like to override `eslint` or `prettier` settings, you can add the rules in your `.eslintrc.json` file.

The ESLint rules go directly under `"rules"` while prettier options go under `"prettier/prettier"`.

Note: overriding `prettier` rules(trailing comma, single quote, etc) require including all existing rules as well.

```json
{
  "extends": ["@abhijithvijayan/eslint-config"],
  "rules": {
    "no-console": "off",
    "react/jsx-props-no-spreading": "off",
    "prettier/prettier": [
      "error",
      {
        "bracketSpacing": true,
        "jsxBracketSameLine": false,
        "printWidth": 120,
        "semi": true,
        "singleQuote": true,
        "tabWidth": 4,
        "trailingComma": "all",
        "useTabs": false,
        "proseWrap": "always"
      }
    ]
  }
}
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
        "source.fixAll": true,
        "source.fixAll.eslint": false
    },
    "prettier.disableLanguages": ["javascript", "javascriptreact", "typescript", "typescriptreact"],
    ```

## Bugs

Please file an issue [here](https://github.com/abhijithvijayan/eslint-config/issues/new) for bugs, missing documentation, or unexpected behavior.

## Credits

This was initially a fork of [eslint-config-wesbos](https://www.npmjs.com/package/eslint-config-wesbos). Thanks [wesbos](https://twitter.com/wesbos)!

## License

MIT © [Abhijith Vijayan](https://abhijithvijayan.in)
