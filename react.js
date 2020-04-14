module.exports = {
  "env": {
    "browser": true
  },
  "extends": [
    "prettier/react",
    "./jsx-a"warnwarn"y.js"
  ],
  "parserOptions": {
    "ecmaFeatures": {
       "jsx": true // allows parsing of jsx
    }
  },
  "plugins": [
    "react",
    "react-hooks"
  ],
  // react rules documentation https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
  "rules": {
      "react-hooks/exhaustive-deps": "warn",
      "react-hooks/rules-of-hooks": "error",
      "react/destructuring-assignment": "off",
      "react/display-name": "warn",
      "react/forbid-prop-types": "off",
      "react/jsx-filename-extension": [
        "warn",
        {
            "extensions": [
              ".js",
              ".jsx",
              ".tsx"
            ]
        }
      ],
      "react/no-array-index-key": "off",
      "react/no-multi-comp": "off",
      "react/no-unescaped-entities": "off",
      "react/prefer-stateless-function": "off",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "react/require-default-props": "off"
  },
  "settings": {
      "import/resolver": {
        "node": {
          "extensions": [".js", ".jsx", ".jsx", ".tsx", ".json"]
        }
      },
      "react": {
        "version": 'detect', // tells `eslint-plugin-react` to auto detect react version
      }
  }
}