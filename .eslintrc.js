module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'no-use-before-define': 'off',
    indent: ['error', 2],
    'react/require-default-props': 0,
    'import/no-unresolved': 0,
    'block-scoped-var': 'warn',
    camelcase: 'warn',
    curly: ['error', 'all'],
    'react/prop-types': 'warn',
    'react/no-unescaped-entities': 0,
    'import/extensions': 0,
    'no-promise-executor-return': 0,
    'no-unused-vars': ['warn', { vars: 'all', args: 'none', ignoreRestSiblings: false }],
    'consistent-return': 0,
    'no-restricted-globals': 0,
  },
};
