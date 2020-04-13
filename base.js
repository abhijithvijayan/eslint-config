module.exports = {
   "extends": [
      "./prettier.js"
   ],
   "rules": {
      "arrow-body-style": [
         "error",
         "as-needed",
         {
            "requireReturnForObjectLiteral":true
         }
      ],
      "comma-dangle": 0,
      "consistent-return": 0,
      "func-names": 0,
      "import": 0,
      "import/extensions": 0,
      "import/prefer-default-export": 0,
      "indent": [
         "error",
         "tab",
         {
            "SwitchCase": 1,
            "MemberExpression": 1,
            "ArrayExpression": 1,
            "ObjectExpression": 1,
            "ImportDeclaration": 1,
            "flatTernaryExpressions": false
         }
      ],
      "max-len": 0,
      "no-alert": 0,
      "no-await-in-loop": 0,
      "no-console": 2,
      "no-debugger": 0,
      "no-param-reassign": [
         2,
         {
            "props": false
         }
      ],
      "no-restricted-syntax": [
         2,
         "ForInStatement",
         "LabeledStatement",
         "WithStatement"
      ],
      "no-return-assign": [
         "error",
         "except-parens"
      ],
      "no-shadow": [
         2,
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
      "no-underscore-dangle": 0,
      "no-unused-expressions": [
         2,
         {
            "allowTaggedTemplates": true
         }
      ],
      "no-unused-vars": [
         1,
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
         2,
         "single",
         {
            "allowTemplateLiterals": true,
            "avoidEscape": true
         }
      ],
      "radix": 0,
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