module.exports = {
  "extends": [
    "./non-rules.js",
    "airbnb", // Uses rules from `eslint-config-airbnb`
    "prettier",
    "./base.js"
  ],
  "parser": "babel-eslint",
  "plugins": [
    "prettier"
  ],
  "rules": {},
}