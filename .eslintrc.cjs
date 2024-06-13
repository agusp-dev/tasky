const RULES = {
  OFF: 'off',
  WARN: 'warn',
  ERROR: 'error'
}

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // 'no-trailing-spaces': [RULES.ERROR, { 'ignoreComments': true, 'skipBlankLines': true }],
    "keyword-spacing": [RULES.ERROR, { "before": true, "after": true }],
    "no-multi-spaces": RULES.ERROR,
    'max-len': [RULES.WARN, { code: 120 }],
    'semi': [RULES.ERROR, 'never'],
    'quotes': [RULES.ERROR, 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }
    ],
    'jsx-quotes': [RULES.ERROR, 'prefer-single'],
    'no-multiple-empty-lines': [RULES.ERROR, { 'max': 1 }],
    'no-unused-vars': [RULES.ERROR, { vars: 'all' }],
    'import/prefer-default-export': RULES.OFF,
    'react/jsx-props-no-spreading': RULES.OFF,
    'react/jsx-uses-react': RULES.OFF, // new jsx transform
    'react/react-in-jsx-scope': RULES.OFF, // new jsx transform
    'react/function-component-definition': RULES.OFF,
  },
}
