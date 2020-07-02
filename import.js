module.exports = {
	"env": {
		"es6": true
	},
	"extends": [
		"plugin:import/errors",
		"plugin:import/warnings"
	],
	"rules": {
		"import/extensions": "off",
		"import/first": "error",
		"import/no-absolute-path": "error",
		"import/no-anonymous-default-export": "error",
		"import/no-duplicates": "error",
		"import/no-internal-modules": "off",
		"import/no-mutable-exports": "error",
		"import/no-unused-modules": "off",
		"import/no-restricted-paths": "off",
		"import/no-unassigned-import": "off",
		"import/no-webpack-loader-syntax": "error",
		"import/prefer-default-export": "off"
	},
	"settings": {
		"import/resolver": {
			"node": {
				"extensions": [
					".js",
					".json"
				]
			}
		},
		"import/ignore": [
			"node_modules",
			".json$",
			".(scss|css)$"
		]
	}
}