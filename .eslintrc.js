module.exports = {
  extends: ['airbnb-base', 'angular'],
  plugins: ['angular', 'import'],
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js',
      },
    },
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  rules: {
    indent: [2, 2, { SwitchCase: 1 }],
    quotes: [2, 'single'],
    'linebreak-style': [2, 'windows'],
    semi: [2, 'always'],
    'no-param-reassign': 0,
  },
  env: {
    amd: true,
    browser: true,
    es6: true,
    jasmine: true,
    mocha: true,
  },
  ecmaFeatures: {
    modules: true,
  },
  globals: {
    document: true,
    window: true,
    require: true,
  },
};
