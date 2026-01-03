/**
 * Prettier configuration and rules
 */
export const prettierOptions = {
  bracketSpacing: false,
  bracketSameLine: false,
  printWidth: 80,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,
  proseWrap: 'always',
};

export const prettierRules = {
  'prettier/prettier': ['error', prettierOptions],
};

export default prettierRules;
