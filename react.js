/**
 *  @abhijithvijayan/eslint-config/react
 *
 *  React configuration for ESLint v9 flat config
 *
 *  @author   abhijithvijayan <https://abhijithvijayan.in>
 *  @license  MIT License
 */

import globals from 'globals';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import eslintConfigPrettier from 'eslint-config-prettier';

import jsxA11yRules from './shared/jsx-a11y.js';
import reactHooksRules from './shared/react-hooks.js';

/**
 * React ESLint flat config
 * @param {Object} options - Configuration options
 * @param {string[]} options.files - File patterns to lint (default: JSX/TSX files)
 * @returns {Object[]} ESLint flat config array
 */
export default function react(options = {}) {
  const {files = ['**/*.jsx', '**/*.tsx']} = options;

  return [
    {
      name: '@abhijithvijayan/eslint-config/react',
      files,
      languageOptions: {
        globals: {
          ...globals.browser,
        },
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
      },
      plugins: {
        react: reactPlugin,
        'react-hooks': reactHooksPlugin,
        'jsx-a11y': jsxA11yPlugin,
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
      rules: {
        // React recommended rules
        ...reactPlugin.configs.recommended.rules,

        // JSX A11y rules
        ...jsxA11yRules,

        // React Hooks rules
        ...reactHooksRules,

        // Custom React rules
        // Forbid "button" element without an explicit "type" attribute
        'react/button-has-type': 'error',

        // Enforce consistent usage of destructuring assignment of props, state, and context
        'react/destructuring-assignment': ['error', 'always'],

        // Prevent missing displayName in a React component definition
        'react/display-name': 'warn',

        // Forbid certain propTypes
        'react/forbid-prop-types': 'off',

        // Restrict file extensions that may contain JSX
        'react/jsx-filename-extension': [
          'warn',
          {
            extensions: ['.js', '.jsx', '.tsx'],
          },
        ],

        // Prevent usage of Array index in keys
        'react/no-array-index-key': 'error',

        // Prevent usage of dangerous JSX props
        'react/no-danger': 'error',

        // Report when a DOM element is using both children and dangerouslySetInnerHTML
        'react/no-danger-with-children': 'error',

        // Prevent usage of deprecated methods
        'react/no-deprecated': 'error',

        // Prevent direct mutation of this.state
        'react/no-direct-mutation-state': 'error',

        // Prevent multiple component definition per file
        'react/no-multi-comp': 'off',

        // Prevent usage of the return value of React.render
        'react/no-render-return-value': 'error',

        // Report "this" being used in stateless components
        'react/no-this-in-sfc': 'error',

        // Prevent common typos
        'react/no-typos': 'error',

        // Detect unescaped HTML entities, which might represent malformed tags
        'react/no-unescaped-entities': 'error',

        // Prevent usage of setState
        'react/no-set-state': 'error',

        // Prevent usage of unsafe lifecycle methods
        'react/no-unsafe': 'error',

        // Enforce stateless components to be written as a pure function
        'react/prefer-stateless-function': 'off',

        // Prevent missing props validation in a React component definition
        'react/prop-types': 'off',

        // Prevent missing React when using JSX (not needed in React 17+)
        'react/react-in-jsx-scope': 'off',

        // Enforce a defaultProps definition for every prop that is not a required prop
        'react/require-default-props': 'off',

        // Enforce ES5 or ES6 class for returning value in render function
        'react/require-render-return': 'error',

        // Prevent extra closing tags for components without children (fixable)
        'react/self-closing-comp': [
          'error',
          {
            component: true,
            html: true,
          },
        ],

        // State initialization in an ES6 class component should be in a constructor
        'react/state-in-constructor': 'error',
      },
    },
    // Prettier config to disable conflicting rules
    eslintConfigPrettier,
  ];
}
