module.exports = {
	"env": {
		"browser": true
	},
	"extends": [
		"plugin:react/recommended", // extend config which uses `eslint-plugin-react`
		"prettier/react", // If you extend a config which uses a plugin, it is recommended to add "prettier/that-plugin" (if available).
		"./shared/jsx-a11y.js",
		"./shared/react-hooks.js"
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
		// Forbid "button" element without an explicit "type" attribute
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
		"react/button-has-type": "error",

		// Enforce consistent usage of destructuring assignment of props, state, and context
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
		"react/destructuring-assignment": ["error", "always"],

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
		"react/no-array-index-key": "error",

		// Prevent usage of dangerous JSX props
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
		"react/no-danger": "error",

		// Report when a DOM element is using both children and dangerouslySetInnerHTML
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
		"react/no-danger-with-children": "error",

		// Prevent usage of deprecated methods
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
		"react/no-deprecated": "error",

		// Prevent direct mutation of this.state
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
		"react/no-direct-mutation-state": "error",

		// Prevent multiple component definition per file
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
		"react/no-multi-comp": "off",

		// Prevent usage of the return value of React.render
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
		"react/no-render-return-value": "error",

		// Report "this" being used in stateless components
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md
		"react/no-this-in-sfc": "error",

		// Prevent common typos
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-typos.md
		"react/no-typos": "error",

		// Detect unescaped HTML entities, which might represent malformed tags
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
		"react/no-unescaped-entities": "error",

		// Prevent usage of setState
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
		"react/no-set-state": "error",

		// Prevent usage of unsafe lifecycle methods
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md
		"react/no-unsafe": "error",

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
		"react/require-default-props": "off",

		// Enforce ES5 or ES6 class for returning value in render function
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
		"react/require-render-return": "error",

		// Prevent extra closing tags for components without children (fixable)
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
		"react/self-closing-comp": [
			"error",
			{
				"component": true,
				"html": true
			}
		],

		// State initialization in an ES6 class component should be in a constructor
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md
		"react/state-in-constructor": "error"
	},
	"settings": {
		// Override `eslint-plugin-import` rule
		"import/resolver": {
			"node": {
				"extensions": [".js", ".jsx", ".ts", ".tsx", ".json"]
			}
		},
		"react": {
			"version": "detect" // tells `eslint-plugin-react` to auto detect react version
		}
	}
}