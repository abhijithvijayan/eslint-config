module.exports = {
	"env": {
		"jest": true
		// "es6": true,
		// "node": true,
		// "commonjs": true
	},
	"parserOptions": {
		// Only ESLint 6.2.0 and later support ES2020.
		"ecmaVersion": "latest", // enables the latest supported ECMAScript version in ESLint’s default parser.
		"ecmaFeatures": {
			"classes": true,
			"impliedStrict": true
		},
		"sourceType": "module" // allows for the use of `imports`
	}
}
