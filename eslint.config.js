/**
 *  ESLint configuration for this project
 *  Uses the local JavaScript config
 */

import globals from 'globals';
import javascript from './javascript.js';

const config = [
  // Ignore patterns
  {
    ignores: ['node_modules/**', 'dist/**', 'coverage/**'],
  },

  // Apply JavaScript config to this project
  ...javascript({
    files: ['**/*.js', '**/*.mjs', '**/*.cjs'],
  }),

  // Add Node.js and browser globals for this config package
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
  },
];

export default config;
