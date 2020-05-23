module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    'jest/globals': true,
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'react-hooks',
    'prettier',
    'prefer-object-spread',
    'import',
    'jest',
    'jsx-a11y',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:array-func/all',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  rules: {
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/unified-signatures': 'error',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    '@typescript-eslint/promise-function-async': [
      'error',
      {
        allowAny: true,
      },
    ],
    '@typescript-eslint/require-array-sort-compare': 'error',
    '@typescript-eslint/array-type': [
      'error',
      { default: 'array-simple', readonly: 'array-simple' },
    ],
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/no-unused-vars-experimental': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',

    'require-atomic-updates': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'symbol-description': 'error',
    'template-curly-spacing': 'error',
    'vars-on-top': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    'object-shorthand': 'error',
    'prefer-destructuring': ['error', { object: true, array: false }],
    'no-else-return': 'error',
    'no-await-in-loop': 'error',
    'callback-return': 'error',
    'prefer-template': 'error',
    quotes: ['warn', 'single', 'avoid-escape'],
    'no-bitwise': 'error',
    'no-continue': 'error',
    'no-console': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'error',
    'no-empty-character-class': 'error',
    'no-empty-pattern': 'error',
    'no-ex-assign': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-label': 'error',
    'no-floating-decimal': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-invalid-regexp': 'error',
    'no-inner-declarations': 'error',
    'no-lone-blocks': 'error',
    'no-multi-assign': 'error',
    'no-misleading-character-class': 'error',
    'no-new-symbol': 'error',
    'no-param-reassign': 'error',
    'no-process-exit': 'error',
    'no-prototype-builtins': 'error',
    'no-return-await': 'warn',
    'no-self-compare': 'error',
    'no-shadow-restricted-names': 'error',
    'no-sparse-arrays': 'error',
    'no-this-before-super': 'error',
    'no-undef': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-useless-call': 'error',
    'no-useless-catch': 'warn',
    'no-useless-concat': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-escape': 'warn',
    'no-useless-rename': 'error',
    'no-useless-return': 'warn',
    'no-void': 'warn',
    'one-var-declaration-per-line': 'error',
    'prefer-object-spread': 'error',
    'prefer-promise-reject-errors': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    curly: 'error',
    'dot-notation': 'error',
    'eol-last': 'error',
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'guard-for-in': 'error',
    'max-classes-per-file': ['error', 1],
    'new-parens': 'error',
    'no-caller': 'error',
    'no-cond-assign': 'error',
    'no-debugger': 'error',
    'no-empty': 'error',
    'no-eval': 'error',
    'no-multiple-empty-lines': 'error',
    'no-new-wrappers': 'error',
    'no-shadow': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-undef-init': 'error',
    'no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    'one-var': ['error', 'never'],
    radix: 'error',
    semi: 'error',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'spaced-comment': [
      'error',
      'always',
      {
        exceptions: ['/'],
      },
    ],
    'use-isnan': 'error',
    'no-extra-semi': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    'import/order': [
      'error',
      {
        groups: [['external', 'builtin'], 'internal', ['parent', 'sibling', 'index']],
      },
    ],
    'import/no-default-export': 'warn',

    'jest/prefer-strict-equal': 'error',
    'jest/lowercase-name': 'error',

    'react/jsx-pascal-case': 'error',
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-spacing': ['error', 'never', { allowMultiline: true }],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],
    'react/no-danger': 'warn',
    'react/self-closing-comp': 'error',
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: true,
        assignment: true,
        return: true,
        arrow: true,
      },
    ],
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/no-will-update-set-state': 'error',
    'react/no-multi-comp': ['error', { ignoreStateless: true }],
    'react/prefer-es6-class': ['error', 'always'],
    'react/boolean-prop-naming': 'error',
    'react/button-has-type': 'error',
    'react/destructuring-assignment': 'error',
    'react/forbid-dom-props': 'error',
    'react/no-array-index-key': 'error',
    'react/no-access-state-in-setstate': 'error',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/display-name': 'off',
    'react/no-redundant-should-component-update': 'error',
    'react/no-typos': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-unsafe': 'error',
    'react/no-unused-prop-types': 'error',
    'react/no-unused-state': 'error',
    'react/prefer-stateless-function': 'error',
    'react/sort-comp': 'error',
    'react/void-dom-elements-no-children': 'error',
    'react/jsx-boolean-value': ['error'],
    'react/jsx-no-bind': 'warn',
    'react/jsx-no-literals': 'off',
    'react/jsx-fragments': 'error',
    'react/jsx-sort-default-props': 'error',
    'react/jsx-sort-props': 'error',
    'react/jsx-tag-spacing': 'error',
    'react/jsx-curly-newline': 'error',
    'react/jsx-no-useless-fragment': 'error',

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    'array-func/prefer-array-from': 'off',

    'prefer-object-spread/prefer-object-spread': 'error',
  },
};
