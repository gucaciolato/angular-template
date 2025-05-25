import angular from '@angular-eslint/eslint-plugin';
import typescript from '@typescript-eslint/eslint-plugin';
import globals from 'globals';
import prettier from 'eslint-plugin-prettier';

export default [
  /** Arquivos .ts */
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.json', './tsconfig.app.json'],
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: { ...globals.browser },
    },
    plugins: { '@angular-eslint': angular, '@typescript-eslint': typescript, prettier },
    extends: [
      'plugin:@angular-eslint/recommended',
      'plugin:@angular-eslint/template/process-inline-templates',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',           // habilita eslint-plugin-prettier
    ],
    rules: {
      /* ——— Angular ——— */
      '@angular-eslint/prefer-standalone': 'error',        // força stand-alone
      '@angular-eslint/use-lifecycle-interface': 'warn',
      '@angular-eslint/prefer-on-push-component-change-detection': 'warn',

      /* ——— Typescript ——— */
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

      /* ——— Prettier ——— */
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
    },
  },

  /** Templates HTML */
  {
    files: ['**/*.html'],
    plugins: { '@angular-eslint/template': angular['template'] },
    extends: ['plugin:@angular-eslint/template/recommended'],
    rules: {
      // exemplo: força binding acessível
      '@angular-eslint/template/accessible-name': 'warn',
    },
  },
];
