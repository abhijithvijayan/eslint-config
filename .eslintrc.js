module.exports = {
    "env": {
        "browser": true,
        "jest": true,
        "jquery": true,
        "node": true
    },
    "extends": [
        "airbnb",
        "prettier",
        "prettier/react"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 2020, // allows parsing of modern ECMAScript features
        "ecmaFeatures": {
            "classes": true,
            "impliedStrict": true,
            "jsx": true // allows parsing of jsx
        }
    },
    "plugins": [
        "html",
        "prettier",
        "react-hooks"
    ],
    "rules": {
        // eslint rules
        "arrow-body-style": [
            "error",
            "always"
        ],
        "comma-dangle": 0,
        "consistent-return": 0,
        "func-names": 0,
        "import": 0,
        "import/extensions": 0,
        "import/prefer-default-export": 0,
        "jsx-a11y/accessible-emoji": 0,
        "jsx-a11y/anchor-is-valid": [
            "warn",
            {
                "aspects": [
                    "invalidHref"
                ]
            }
        ],
        "jsx-a11y/href-no-hash": "off",
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
        "prettier/prettier": [
            "error",
            {
                "printWidth": 120,
                "semi": true,
                "singleQuote": true,
                "tabWidth": 4,
                "trailingComma": "es5"
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
                    ".jsx"
                ]
            }
        ],
        "react/no-array-index-key": 0,
        "react/no-multi-comp": 0,
        "react/no-unescaped-entities": 0,
        "react/prefer-stateless-function": 0,
        "react/prop-types": 0,
        "react/react-in-jsx-scope": 0,
        "react/require-default-props": 0,
        "space-before-function-paren": 0
    },
    "settings": {
        "react": {
            "version": 'detect'
        }
    }
}