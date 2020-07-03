module.exports = {
	"extends": [
		"./shared/non-rules.js", // Shared Global settings
		"./shared/base.js", // Base configuration rules
		"./shared/prettier.js", // Custom Prettier rules
		"./shared/import.js" // Base `eslint-plugin-import` rules
	],
	"parser": "babel-eslint",
	"rules": {}
}