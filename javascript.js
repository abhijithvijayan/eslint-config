module.exports = {
	"extends": [
		"./non-rules.js", // Shared Global settings
		"prettier",
		"./base.js", // Base configuration rules
		"./prettier.js", // Prettier rules
		"./import.js" // Base `eslint-plugin-import` rules
	],
	"parser": "babel-eslint",
	"rules": {}
}