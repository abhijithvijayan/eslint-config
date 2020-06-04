module.exports = {
	"extends": [
		"./non-rules.js", // Shared Global settings
		"plugin:@typescript-eslint/recommended", // Uses rules from `@typescript-eslint/eslint-plugin`
		"prettier/@typescript-eslint", // Use `eslint-config-prettier` to override conflicting rules from `@typescript-eslint/eslint-plugin`
		"./base.js", // Base configuration rules
		"./prettier.js", // Prettier rules
		"./import.js", // Base `eslint-plugin-import` rules
		"plugin:import/typescript" // To support TypeScript usage of `eslint-plugin-import`
	],
	"parser": "@typescript-eslint/parser",
	"plugins": [
		"@typescript-eslint"
	],
	"rules": {
		// Disable Base rules for overriding to fix inconsistencies
		"camelcase": "off",
		"no-unused-vars": "off",
		"no-use-before-define": "off", // ToDo: deprecated https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
		"@typescript-eslint/camelcase": [
			"error",
			{
				"allow": [
					"api_key",
					"api_plan"
				]
			}
		],
		"@typescript-eslint/class-name-casing": "error",
		"@typescript-eslint/explicit-function-return-type": "error",
		"@typescript-eslint/no-explicit-any": "error",
		"@typescript-eslint/no-inferrable-types": "error",
		"@typescript-eslint/no-use-before-define": "error",
		"@typescript-eslint/no-unused-vars": [
			"warn",
			{
				"argsIgnorePattern": "res|next|^err|^_", // Ignore variables starting with underscore
				"ignoreRestSiblings": true,
				"caughtErrors": "all"
			}
		],
		"@typescript-eslint/type-annotation-spacing": "error"
	},
	"settings": {
		// Override `eslint-plugin-import` rule
		"import/resolver": {
			"node": {
				"extensions": [".ts", ".js", ".json"]
			}
		}
	}
}