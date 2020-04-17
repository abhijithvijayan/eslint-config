module.exports = {
  "env": {
    "browser": true
  },
  "extends": [
    "prettier/react",
    "./jsx-a11y.js",
    "./react-hooks.js"
  ],
  "parserOptions": {
    "ecmaFeatures": {
       "jsx": true // allows parsing of jsx
    }
  },
  "plugins": [
    "react"
  ],
  // react rules documentation https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
  "rules": {
      // Enforce consistent usage of destructuring assignment of props, state, and context
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
      "react/destructuring-assignment": "off",

      // Prevent missing displayName in a React component definition
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
      "react/display-name": "warn",

      // Forbid certain propTypes
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
      "react/forbid-prop-types": "off",

      // Restrict file extensions that may contain JSX
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
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

      // Prevent usage of Array index in keys
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
      "react/no-array-index-key": "off",

      // Prevent multiple component definition per file
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
      "react/no-multi-comp": "off",

      // Detect unescaped HTML entities, which might represent malformed tags
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
      "react/no-unescaped-entities": "off",

      // Enforce stateless components to be written as a pure function
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
      "react/prefer-stateless-function": "off",

      // Prevent missing props validation in a React component definition
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
      "react/prop-types": "off",

      // Prevent missing React when using JSX
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
      "react/react-in-jsx-scope": "off",

      // Enforce a defaultProps definition for every prop that is not a required prop
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
      "react/require-default-props": "off"
  },
  "settings": {
      // Override `eslint-plugin-import` rule
      "import/resolver": {
        "node": {
          "extensions": [".js", ".jsx", ".ts", ".tsx", ".json"]
        }
      },
      "react": {
        "version": 'detect' // tells `eslint-plugin-react` to auto detect react version
      }
  }
}