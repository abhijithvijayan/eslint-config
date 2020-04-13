module.exports = {
  "env": {
    "browser": true
  },
  "extends": [
    "prettier/react"
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
  "rules": {
      "react-hooks/exhaustive-deps": "warn",
      "react-hooks/rules-of-hooks": "error",
      "react/destructuring-assignment": 0,
      "react/display-name": 1,
      "react/forbid-prop-types": 0,
      "react/jsx-filename-extension": [
        1,
        {
            "extensions": [
              ".js",
              ".jsx",
              ".tsx"
            ]
        }
      ],
      "react/no-array-index-key": 0,
      "react/no-multi-comp": 0,
      "react/no-unescaped-entities": 0,
      "react/prefer-stateless-function": 0,
      "react/prop-types": 0,
      "react/react-in-jsx-scope": 0,
      "react/require-default-props": 0
  },
  "settings": {
      "import/resolver": {
        "node": {
          "extensions": [".jsx", ".tsx"]
        }
      },
      "react": {
        "version": 'detect', // tells `eslint-plugin-react` to auto detect react version
      }
  }
}