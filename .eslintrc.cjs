module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'plugin:svelte/recommended'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['svelte'],
  rules: {
    // здесь можно настроить правила линтера
  },
  settings: {
    // здесь можно добавить настройки для Svelte
    'svelte/ignore-styles': () => true,
  },
};
