import js from '@eslint/js';
import globals from 'globals';
import prettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import node from 'eslint-plugin-node';

export default [
  {
    ignores: ['dist', 'node_modules', 'package.json', 'package-lock.json'],
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      prettier,
      node,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...eslintConfigPrettier.rules,
      'node/no-unsupported-features/es-syntax': 'off',
      'node/no-missing-import': 'off',
      'prettier/prettier': 'error',
    },
  },
];
