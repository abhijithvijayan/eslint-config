module.exports = {
  extends: [
    'plugin:prettier/recommended', // Enables `eslint-plugin-prettier` & `eslint-config-prettier`.
    // This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  plugins: ['prettier'],
  rules: {
    // Prettier rules: https://prettier.io/docs/en/options.html
    'prettier/prettier': [
      'error',
      {
        bracketSpacing: false,
        jsxBracketSameLine: false,
        printWidth: 80,
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'es5',
        useTabs: false,
        proseWrap: 'always',
      },
    ],
  },
};
