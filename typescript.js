/**
 *  @abhijithvijayan/eslint-config/typescript
 *
 *  TypeScript configuration for ESLint v9 flat config
 *
 *  @author   abhijithvijayan <https://abhijithvijayan.in>
 *  @license  MIT License
 */

import globals from 'globals';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import importXPlugin from 'eslint-plugin-import-x';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

import baseRules from './shared/base.js';
import prettierRules from './shared/prettier.js';
import {importRules} from './shared/import.js';

/**
 * TypeScript ESLint flat config
 * @param {Object} options - Configuration options
 * @param {string[]} options.files - File patterns to lint (default: TS files)
 * @param {string} options.tsconfigPath - Path to tsconfig.json for type-aware linting
 * @returns {Object[]} ESLint flat config array
 */
export default function typescript(options = {}) {
  const {
    files = ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'],
    tsconfigPath,
  } = options;

  const parserOptions = {
    ecmaFeatures: {
      impliedStrict: true,
    },
  };

  // Add project config for type-aware linting if tsconfig path is provided
  if (tsconfigPath) {
    parserOptions.project = tsconfigPath;
  }

  return [
    {
      name: '@abhijithvijayan/eslint-config/typescript',
      files,
      languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        parser: tsParser,
        globals: {
          ...globals.es2024,
          ...globals.jest,
        },
        parserOptions,
      },
      plugins: {
        '@typescript-eslint': tseslint,
        'import-x': importXPlugin,
        prettier: prettierPlugin,
      },
      settings: {
        'import-x/resolver': {
          node: true,
          typescript: true,
        },
      },
      rules: {
        // Base rules (with some disabled for TypeScript)
        ...baseRules,

        // Import rules
        ...importRules,

        // Prettier rules
        ...prettierRules,

        // Disable rules that require resolver configuration in ESM
        'import-x/no-unresolved': 'off',
        'import-x/namespace': 'off',
        'import-x/default': 'off',
        'import-x/named': 'off',

        // TypeScript specific rules
        // Some rules also fail in TypeScript files, for example: https://github.com/typescript-eslint/typescript-eslint/issues/662#issuecomment-507081586
        'no-undef': 'off', // TypeScript handles this
        'no-shadow': 'off', // Use @typescript-eslint/no-shadow instead
        'no-unused-vars': 'off', // Use @typescript-eslint/no-unused-vars instead

        // @typescript-eslint rules
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-inferrable-types': 'error',
        '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            argsIgnorePattern: 'res|next|^err|^_',
            ignoreRestSiblings: true,
            caughtErrors: 'all',
          },
        ],
        '@typescript-eslint/no-shadow': ['error'],
      },
    },
    // Prettier config to disable conflicting rules
    eslintConfigPrettier,
  ];
}
