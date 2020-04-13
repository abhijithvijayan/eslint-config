module.exports = {
   "env": {
     "jest": true,
     "node": true,
     "browser": true
   },
   "parserOptions": {
     "ecmaVersion": 2018, // allows parsing of modern ECMAScript features
     "ecmaFeatures": {
        "classes": true,
        "impliedStrict": true
     },
     "sourceType": 'module' // allows for the use of `imports`
   },
   "settings": {
     "import/resolver": {
      "node": {
        "extensions": [".js", ".json"]
      }
     }
   }
}