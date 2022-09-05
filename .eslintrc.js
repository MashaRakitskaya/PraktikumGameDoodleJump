module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },
  extends: ['react-app', 'plugin:react/recommended', 'eslint-config-prettier'],
  plugins: ['@emotion', 'prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 'error',
    'react/display-name': [0],
    'react/prop-types': [0, { ignore: ['children', 'className', 'style'] }],
    'import/no-anonymous-default-export': 'off',
    'no-use-before-define': 'off'
  },
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      version: 'detect'
    },
    'import/resolver': {
      node: {
        paths: ['src']
      }
    }
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      tsx: true
    }
  }
};
