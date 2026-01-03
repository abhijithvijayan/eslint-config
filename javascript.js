/**
 *  @abhijithvijayan/eslint-config/javascript
 *
 *  Base JavaScript configuration for ESLint v9 flat config
 *
 *  @author   abhijithvijayan <https://abhijithvijayan.in>
 *  @license  MIT License
 */

import globals from 'globals';
import importXPlugin from 'eslint-plugin-import-x';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

import baseRules from './shared/base.js';
import prettierRules from './shared/prettier.js';
import {importRules} from './shared/import.js';

/**
 * JavaScript ESLint flat config
 * @param {Object} options - Configuration options
 * @param {string[]} options.files - File patterns to lint (default: JS files)
 * @returns {Object[]} ESLint flat config array
 */
export default function javascript(options = {}) {
  const {files = ['**/*.js', '**/*.mjs', '**/*.cjs']} = options;

  return [
    {
      name: '@abhijithvijayan/eslint-config/javascript',
      files,
      languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        globals: {
          ...globals.es2024,
          ...globals.jest,
        },
        parserOptions: {
          ecmaFeatures: {
            impliedStrict: true,
          },
        },
      },
      plugins: {
        'import-x': importXPlugin,
        prettier: prettierPlugin,
      },
      settings: {
        'import-x/resolver': {
          node: true,
        },
      },
      rules: {
        ...baseRules,
        ...importRules,
        ...prettierRules,
        // Disable rules that require resolver configuration in ESM
        'import-x/no-unresolved': 'off',
        'import-x/namespace': 'off',
        'import-x/default': 'off',
        'import-x/named': 'off',
      },
    },
    // Prettier config to disable conflicting rules
    eslintConfigPrettier,
  ];
}
