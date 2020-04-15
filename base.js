module.exports = {
   "extends": [
      "airbnb" // Uses rules from `eslint-config-airbnb`
   ],
   "rules": {
      "arrow-body-style": [
         "error",
         "as-needed",
         {
            "requireReturnForObjectLiteral":true
         }
      ],
      "comma-dangle": "off",
      "consistent-return": "off",
      "func-names": "off",
      "max-len": "off",
      "no-alert": "off",
      "no-await-in-loop": "off",
      "no-console": "error",
      "no-debugger": "off",
      "no-param-reassign": [
         "error",
         {
            "props": false
         }
      ],
      "no-restricted-syntax": [
         "error",
         "ForInStatement",
         "LabeledStatement",
         "WithStatement"
      ],
      "no-return-assign": [
         "error",
         "except-parens"
      ],
      "no-shadow": [
         "error",
         {
            "allow": [
               "resolve",
               "reject",
               "done",
               "next",
               "err",
               "error"
            ],
            "hoist": "all"
         }
      ],
      "no-underscore-dangle": "off",
      "no-unused-expressions": [
         "error",
         {
            "allowTaggedTemplates": true
         }
      ],
      "no-unused-vars": [
         "warn",
         {
            "argsIgnorePattern": "res|next|^err",
            "ignoreSiblings": true
         }
      ],
      "prefer-const": [
         "error",
         {
            "destructuring": "all"
         }
      ],
      "quotes": [
         "error",
         "single",
         {
            "allowTemplateLiterals": true,
            "avoidEscape": true
         }
      ],
      "radix": "off",
      "space-before-function-paren": [
         "error",
         {
            "anonymous": "never",
            "named": "never",
            "asyncArrow": "always"
         }
      ]
   }
}