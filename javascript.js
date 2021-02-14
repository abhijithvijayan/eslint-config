module.exports = {
	"extends": [
		"./shared/non-rules.js", // Shared Global settings
		"./shared/base.js", // Base configuration rules
		"./shared/prettier.js", // Custom Prettier rules
		"./shared/import.js" // Base `eslint-plugin-import` rules
	],
	"parser": "@babel/eslint-parser",
	"parserOptions": {
		"requireConfigFile": false // allow @babel/eslint-parser to run on files that do not have a Babel configuration associated with them
	},
	"rules": {}
}
