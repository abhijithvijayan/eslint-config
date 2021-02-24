module.exports = {
  "env": {
    "node": true
  },
  "extends": [
    "plugin:node/recommended"
  ],
  "plugins": [
    "node"
  ],
  "rules": {
      // enforce either module.exports or exports
      // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/exports-style.md
      "node/exports-style": ["error", "module.exports"],

      // enforce the style of file extensions in import declarations
      // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/file-extension-in-import.md
      // Disabled temporarily due to https://github.com/abhijithvijayan/eslint-config/issues/3#issuecomment-653654869
      // "node/file-extension-in-import": ["error", "always"],

      // enforce either Buffer or require("buffer").Buffer
      // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/buffer.md
      "node/prefer-global/buffer": ["error", "always"],

      // enforce either console or require("console")
      // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/console.md
      "node/prefer-global/console": ["error", "always"],

      // enforce either process or require("process")
      // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/process.md
      "node/prefer-global/process": ["error", "always"],

      // enforce either URLSearchParams or require("url").URLSearchParams
      // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/url-search-params.md
      "node/prefer-global/url-search-params": ["error", "always"],

      // enforce either URL or require("url").URL
      // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/url.md
      "node/prefer-global/url": ["error", "always"],

      // enforce require("dns").promises
      // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-promises/dns.md
      "node/prefer-promises/dns": "error",

      // enforce require("fs").promises
      // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-promises/fs.md
      "node/prefer-promises/fs": "error"
  },
  "settings": {
	// Override `eslint-plugin-node` rule
    "node": {
      "tryExtensions": [".js", ".json", ".node", ".ts"]
    }
  }
}
