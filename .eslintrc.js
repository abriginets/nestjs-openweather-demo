module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'jest', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  rules: {
    'import/prefer-default-export': 'off',
    'no-useless-constructor': 'off',
    'no-return-await': 'off',
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    'import/no-cycle': 'off',
    'eol-last': ['error', 'always'],
    'newline-before-return': 'error',
    'import/extensions': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: false,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    'semi': 'error',
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
    'quotes': 'off',
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'arrow-parens': ['error', 'always'],
    'indent': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
      },
    ],
    'spaced-comment': ['error', 'always'],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2,
        maxEOF: 0,
      },
    ],
    'import/order': [
      'error',
      {
        'groups': [['external', 'internal', 'builtin'], ['sibling', 'parent'], 'index', 'object'],
        'pathGroups': [
          {
            pattern: '@nestjs/**',
            group: 'external',
            position: 'after',
          },
        ],
        'pathGroupsExcludedImportTypes': ['builtin'],
        'newlines-between': 'always',
        'alphabetize': {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
      },
    },
  },
  overrides: [
    {
      files: ['*.ts'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],
};
