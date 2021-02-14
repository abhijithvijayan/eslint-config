// This configuration overrides rules from `eslint-config-airbnb-base`
module.exports = {
   "extends": [
      "@abhijithvijayan/eslint-config-airbnb" // Uses rules from `eslint-config-airbnb-base`
   ],
   "rules": {
      // Require braces in arrow function body
      // https://eslint.org/docs/rules/arrow-body-style
      "arrow-body-style": [
         "error",
         "as-needed",
         {
            "requireReturnForObjectLiteral": true
         }
      ],

      // Require or disallow trailing commas
      // https://eslint.org/docs/rules/comma-dangle
      "comma-dangle": "off",

      // Require or disallow named function expressions
      // https://eslint.org/docs/rules/func-names
      "func-names": "error",

      // Enforce a maximum line length
      // https://eslint.org/docs/rules/max-len
      "max-len": "off",

      // Disallow Use of Alert
      // https://eslint.org/docs/rules/no-alert
      "no-alert": "error",

      // Disallow await inside of loops
      // https://eslint.org/docs/rules/no-await-in-loop
      "no-await-in-loop": "off",

      // disallow the use of console
      // https://eslint.org/docs/rules/no-console
      "no-console": "error",

      // Disallow Reassignment of Function Parameters
      // https://eslint.org/docs/rules/no-param-reassign
      "no-param-reassign": [
         "error",
         {
            "props": false
         }
      ],

      // disallow specified syntax
      // https://eslint.org/docs/rules/no-restricted-syntax
      "no-restricted-syntax": [
         "error",
         "ForInStatement",
         "LabeledStatement",
         "WithStatement"
      ],

      // Disallow Assignment in return Statement
      // https://eslint.org/docs/rules/no-return-assign
      "no-return-assign": [
         "error",
         "except-parens"
      ],

      // disallow variable declarations from shadowing variables declared in the outer scope
      // https://eslint.org/docs/rules/no-shadow
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
         	 "allowTaggedTemplates": true,
			 "allowShortCircuit": true,
			 "allowTernary": true
         }
      ],
      "no-unused-vars": [
         "warn",
         {
            "argsIgnorePattern": "res|next|^err|^_",
            "ignoreRestSiblings": true,
            "caughtErrors": "all"
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
