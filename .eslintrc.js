const path = require('path');

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['no-console-log'],
  rules: {
    'no-console-log/no-console-log': 'error',
  },
  settings: {},
};
