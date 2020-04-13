module.exports = {
   "extends": [
      "./non-rules.js",
      "airbnb", // Uses rules from `eslint-config-airbnb`
      "plugin:@typescript-eslint/recommended", // Uses rules from `@typescript-eslint/eslint-plugin`
      "prettier",
      "prettier/@typescript-eslint", // Use `eslint-config-prettier` to override conflicting rules from `@typescript-eslint/eslint-plugin`
      "./base.js",
   ],
   "parser": "@typescript-eslint/parser",
   "plugins": [
      "prettier",
      "@typescript-eslint"
   ],
   "rules": {
       "@typescript-eslint/no-use-before-define": "error",
       "@typescript-eslint/camelcase": [
          "error",
          {
             "allow": [
                "utm_campaign",
                "utm_content",
                "utm_medium",
                "utm_source",
                "utm_term",
                "utm_invalid",
                "content_name",
                "content_category",
                "api_plan"
             ]
          }
       ],
       "@typescript-eslint/class-name-casing": "error",
       "@typescript-eslint/no-inferrable-types": "error",
       "@typescript-eslint/type-annotation-spacing": "error"
   },
   "settings": {
      "import/resolver": {
        "node": {
          "extensions": [".ts", ".js", ".json"]
        }
      }
   }
}