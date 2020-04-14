module.exports = {
  "extends": [
    "./non-rules.js",
    "airbnb", // Uses rules from `eslint-config-airbnb`
    "prettier",
    "./base.js",
    "./prettier.js"
  ],
  "parser": "babel-eslint",
  "rules": {},
}