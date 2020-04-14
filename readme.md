# eslint-config [![npm version](https://img.shields.io/npm/v/@abhijithvijayan/eslint-config)](https://www.npmjs.com/package/@abhijithvijayan/eslint-config)

My shared ESLint & Prettier configuration for projects

## Installing

You can use this config **globally** and/or **locally** per project(recommended).

## Local / Per Project Install

1. If you don't already have a `package.json` file, create one with `npm init -y`.

2. Then we need to install everything needed by the config:   
    ```
    npx install-peerdeps @abhijithvijayan/eslint-config --dev
    ```

3. You can see in your `package.json` there are now a big list of devDependencies.

4. Create a `.eslintrc.json` file in the root of your project's directory (it should live where `package.json` does). Your `.eslintrc.json` file should look like this:

    ```json
    {
      "extends": ["@abhijithvijayan/eslint-config"]
    }
    ```

      Tip: You can alternatively put this object in your `package.json` under the property `"eslintConfig":`. This makes one less file in your project.

5. You can add two scripts to your package.json to lint and/or fix:

    ```json
    "scripts": {
      "lint": "eslint . --ext .js,.ts",
      "lint:fix": "eslint . --ext .js,.ts --fix"
    },
    ```

6. Now you can manually lint your code by running `npm run lint` and fix all fixable issues with `npm run lint:fix`.
   You probably want your editor to do this though.

## Global Install

1. First install everything needed:

```
npx install-peerdeps --global @abhijithvijayan/eslint-config
```

2. Then you need to make a global `.eslintrc.json` file:

ESLint will look for one in your home directory

- `~/.eslintrc.json` for linux / mac
- `C:\Users\username\.eslintrc.json` for windows

In your `.eslintrc.json` file, it should look like this:

```json
{
  "extends": [
    "@abhijithvijayan/eslint-config",
    "@abhijithvijayan/eslint-config/react"
  ]
}
```

3. To use from the CLI, you can now run `eslint .` or configure your editor as we show next.

# Override

If you'd like to override `eslint` or `prettier` settings, you can add the rules in your `.eslintrc.json` file.

The ESLint rules go directly under `"rules"` while prettier options go under `"prettier/prettier"`.

Note that prettier rules overwrite anything in this config (trailing comma, and single quote), so you'll need to include those as well.

```json
{
  "extends": ["@abhijithvijayan/eslint-config"],
  "rules": {
    "prettier/prettier": [
      "error",
      {
         "printWidth": 120,
         "semi": true,
         "singleQuote": true,
         "tabWidth": 4,
         "trailingComma": "es5"
      }
    ]
  }
}
```

## With VS Code

You should read this entire thing. Serious!

Once you have done one, or both, of the above installs. You probably want your editor to lint and fix for you. Here are the instructions for VS Code:

1. Install the [ESLint package](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. Install the [Prettier package](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
3. Now we need to setup some VS Code settings via `Code/File` → `Preferences` → `Settings`. It's easier to enter these settings while editing the `settings.json` file, so click the `{}` icon in the top right corner:

```js
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
"eslint.autoFixOnSave": true,
"prettier.disableLanguages": ["javascript", "javascriptreact", "typescript", "typescriptreact"],
```

## With Create React App

1. Run `npx install-peerdeps --dev @abhijithvijayan/eslint-config`
1. Open your `package.json` and replace `"extends": "react-app"` with `"extends": "@abhijithvijayan/eslint-config"` or create a separate `.eslintrc.json` file(recommended)

## Note

Due to [this bug](https://github.com/eslint/eslint/issues/3458) you
need to have the associated plugins installed to make things work. I recommend
keeping them as `devDependencies` to your project if you're going to use the config
for it.


## Credits

Thanks to [@wesbos](https://github.com/wesbos) for some base rules