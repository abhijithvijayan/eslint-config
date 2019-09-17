# eslint-config-onepass

[![npm version](https://badge.fury.io/js/eslint-config-onepass.svg)](https://badge.fury.io/js/eslint-config-onepass)

These are the settings for ESLint and Prettier for [OnePass](https://github.com/onepassapp/onepass) Password Manager

## Installing

You can use eslint **globally** and/or **locally** per project.

It's usually best to install this locally once per project, that way you can have project specific settings as well as sync those settings with others working on your project via git.

## Local / Per Project Install

1. If you don't already have a `package.json` file, create one with `npm init -y`.

2. Then we need to install everything needed by the config:

```
npx install-peerdeps --dev eslint-config-onepass
```

3. You can see in your `package.json` there are now a big list of devDependencies.

4. Create a `.eslintrc.json` file in the root of your project's directory (it should live where `package.json` does). Your `.eslintrc.json` file should look like this:

```json
{
  "extends": ["onepass"]
}
```

Tip: You can alternatively put this object in your `package.json` under the property `"eslintConfig":`. This makes one less file in your project.

5. You can add two scripts to your package.json to lint and/or fix:

```json
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix"
},
```

6. Now you can manually lint your code by running `npm run lint` and fix all fixable issues with `npm run lint:fix`.
   You probably want your editor to do this though.

## Global Install

1. First install everything needed:

```
npx install-peerdeps --global eslint-config-onepass
```

2. Then you need to make a global `.eslintrc.json` file:

ESLint will look for one in your home directory

- `~/.eslintrc.json` for linux / mac
- `C:\Users\username\.eslintrc.json` for windows

In your `.eslintrc.json` file, it should look like this:

```json
{
  "extends": ["onepass"]
}
```

3. To use from the CLI, you can now run `eslint .` or configure your editor as we show next.

# Override

If you'd like to override `eslint` or `prettier` settings, you can add the rules in your `.eslintrc.json` file.

The ESLint rules go directly under `"rules"` while prettier options go under `"prettier/prettier"`.

Note that prettier rules overwrite anything in this config (trailing comma, and single quote), so you'll need to include those as well.

```json
{
  "extends": ["onepass"],
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
"eslint.autoFixOnSave": true,
"prettier.disableLanguages": ["javascript", "javascriptreact"],
```

## With Create React App

1. run `npx install-peerdeps --dev eslint-config-onepass`
1. Crack open your `package.json` and replace `"extends": "react-app"` with `"extends": "onepass"`

## 🤬🤬🤬🤬 ITS NOT WORKING

Start fresh. Sometimes npm modules can goof you up.

This will remove them all from the project.

```
npm remove eslint-config-onepass babel-eslint eslint eslint-config-prettier eslint-config-airbnb eslint-plugin-html eslint-plugin-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react prettier eslint-plugin-react-hooks
```

Then, remove your `package-lock.json` file and delete the `node_modules/` directory.

- To do the above for global installation, add the `--global` flag.

  ```
  npm remove --global eslint-config-onepass babel-eslint eslint eslint-config-prettier eslint-config-airbnb eslint-plugin-html eslint-plugin-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react prettier eslint-plugin-react-hooks
  ```

Then follow the above instructions again from start.
