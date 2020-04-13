module.exports = {
   "env": {
     "jest": true,
     "node": true
   },
   "parserOptions": {
     "ecmaVersion": 2018, // allows parsing of modern ECMAScript features
     "ecmaFeatures": {
        "classes": true,
        "impliedStrict": true
     },
     "sourceType": 'module' // allows for the use of `imports`
   },
   "plugins": [
      "prettier"
   ],
   "settings": {
     "import/resolver": {
      "node": {
        "extensions": [".js", ".json"]
      }
     }
   }
}