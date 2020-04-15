module.exports = {
  "extends": [
    "plugin:prettier/recommended" // Enables `eslint-plugin-prettier` & `eslint-config-prettier`.
    // This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
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