/**
 *  @abhijithvijayan/eslint-config/node
 *
 *  Node.js configuration for ESLint v9 flat config
 *  Uses eslint-plugin-n (successor to eslint-plugin-node)
 *
 *  @author   abhijithvijayan <https://abhijithvijayan.in>
 *  @license  MIT License
 */

import globals from 'globals';
import nodePlugin from 'eslint-plugin-n';
import eslintConfigPrettier from 'eslint-config-prettier';

/**
 * Node.js ESLint flat config
 * @param {Object} options - Configuration options
 * @param {string[]} options.files - File patterns to lint (default: JS files)
 * @returns {Object[]} ESLint flat config array
 */
export default function node(options = {}) {
  const {files = ['**/*.js', '**/*.mjs', '**/*.cjs']} = options;

  return [
    {
      name: '@abhijithvijayan/eslint-config/node',
      files,
      languageOptions: {
        globals: {
          ...globals.node,
        },
      },
      plugins: {
        n: nodePlugin,
      },
      settings: {
        n: {
          tryExtensions: ['.js', '.mjs', '.cjs', '.json', '.node', '.ts'],
        },
      },
      rules: {
        // Include recommended rules from eslint-plugin-n
        ...nodePlugin.configs['flat/recommended-script'].rules,

        // enforce either module.exports or exports
        // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/exports-style.md
        'n/exports-style': ['error', 'module.exports'],

        // enforce either Buffer or require("buffer").Buffer
        // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/buffer.md
        'n/prefer-global/buffer': ['error', 'always'],

        // enforce either console or require("console")
        // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/console.md
        'n/prefer-global/console': ['error', 'always'],

        // enforce either process or require("process")
        // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/process.md
        'n/prefer-global/process': ['error', 'always'],

        // enforce either URLSearchParams or require("url").URLSearchParams
        // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/url-search-params.md
        'n/prefer-global/url-search-params': ['error', 'always'],

        // enforce either URL or require("url").URL
        // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/url.md
        'n/prefer-global/url': ['error', 'always'],

        // enforce require("dns").promises
        // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-promises/dns.md
        'n/prefer-promises/dns': 'error',

        // enforce require("fs").promises
        // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-promises/fs.md
        'n/prefer-promises/fs': 'error',

        // Disable some rules that may conflict with modern ESM usage
        'n/no-missing-import': 'off',
        'n/no-unpublished-import': 'off',
      },
    },
    // Prettier config to disable conflicting rules
    eslintConfigPrettier,
  ];
}
