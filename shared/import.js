/**
 * Import plugin rules configuration (using eslint-plugin-import-x)
 */
export const importRules = {
  'import-x/extensions': 'off',
  'import-x/first': 'error',
  'import-x/no-absolute-path': 'error',
  'import-x/no-anonymous-default-export': 'error',
  'import-x/no-duplicates': 'error',
  'import-x/no-internal-modules': 'off',
  'import-x/no-mutable-exports': 'error',
  'import-x/no-unused-modules': 'off',
  'import-x/no-restricted-paths': 'off',
  'import-x/no-unassigned-import': 'off',
  'import-x/no-webpack-loader-syntax': 'error',
  'import-x/prefer-default-export': 'off',
};

export const importSettings = {};

export default importRules;
