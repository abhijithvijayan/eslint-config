module.exports = {
	"env": {
		"jest": true
		// "es6": true,
		// "node": true,
		// "commonjs": true
	},
	"parserOptions": {
		// Only ESLint 6.2.0 and later support ES2020.
		"ecmaVersion": 2020, // allows parsing of modern ECMAScript features
		"ecmaFeatures": {
			"classes": true,
			"impliedStrict": true
		},
		"sourceType": "module" // allows for the use of `imports`
	}
}