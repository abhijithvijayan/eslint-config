# eslint-config-onepass

[![npm version](https://badge.fury.io/js/eslint-config-onepass.svg)](https://badge.fury.io/js/eslint-config-onepass)

These are the settings for ESLint and Prettier for [OnePass](https://github.com/onepassapp/onepass) Password Manager

# Installation

1. Install everything with

```
npx install-peerdeps --dev eslint-config-onepass
```

2. Create a `.eslintrc` file in the root of your project's directory (it should live where package.json does). Your `.eslintrc` file should look like this:

```
{
  "extends": [
    "onepass"
  ]
}
```

Tip: You can alternatively put this object in your package.json under the property `"eslintConfig:`. This makes one less file in your project.

3. Add these scripts to `package.json`

```
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix"
}
```

4. Now you can manually lint your code by running `npm run lint` and fix all fixable issues with `npm run lint:fix`

# Override

If you'd like to override `eslint` or `prettier` settings, you can add the rules in your `.eslintrc` file.

The ESLint rules go directly under `"rules"` while prettier options go under `"prettier/prettier"`.

Note that prettier rules overwrite anything in this config (trailing comma, and single quote), so you'll need to include those as well.

```
{
  "extends": [
    "onepass"
  ],
  "rules": {
    "no-console": 2,
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 120,
        "tabWidth": 8,
      }
    ]
  }
}
```

Thanks [@wesbos](https://github.com/wesbos) for the initial configuration.

See the original [Readme](https://github.com/wesbos/eslint-config-wesbos#with-vs-code)
